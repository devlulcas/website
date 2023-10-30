import { NODE_ENV } from '$env/static/private';
import { COOKIES_NAMES } from "$/lib/server/firebase/constants/cookies";
import { app } from "$/lib/server/firebase/lib/server";
import { error, redirect } from "@sveltejs/kit";
import { getAuth } from "firebase-admin/auth";
import type { Actions } from "./$types";

export const actions: Actions = {
  signIn: async ({ request, cookies }) => {
    const auth = getAuth(app);
  
    /* Get token from request headers */
    const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];
  
    if (!idToken) {
      return error(401, 'Unauthorized');
    }
  
    /* Verify id token */
    try {
      await auth.verifyIdToken(idToken);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Invalid token';
      return error(401, errorMessage);
    }
  
    /* Create and set session cookie */
    const oneDay = 60 * 60 * 24 * 1 * 1000;
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: oneDay,
    });
  
    cookies.set(COOKIES_NAMES.SESSION, sessionCookie, {
      path: '/',
      maxAge: oneDay,
      sameSite: 'lax',
      secure: NODE_ENV === 'production',
      httpOnly: NODE_ENV === 'production',
    });
  
    return redirect(300, '/dashboard');
  },
  signOut: async ({ cookies }) => {
    cookies.set(COOKIES_NAMES.SESSION, '', {
      path: '/',
      maxAge: 0,
      sameSite: 'lax',
      secure: NODE_ENV === 'production',
      httpOnly: NODE_ENV === 'production',
    });
  
    return redirect(300, '/dashboard/auth/sign-in');
  },
}
