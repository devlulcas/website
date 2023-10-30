import { getAuth } from 'firebase-admin/auth';
import { app } from './server';
import type { Cookies } from '@sveltejs/kit';
import { COOKIES_NAMES } from '../constants/cookies';

export async function getAuthenticatedUser(cookies: Cookies) {
  const auth = getAuth(app);

  const sessionCookie = cookies.get(COOKIES_NAMES.SESSION);

  const sessionCookieValue = sessionCookie

  if (!sessionCookieValue) {
    return null;
  }

  const decodedCookie = await auth.verifySessionCookie(sessionCookieValue);

  const user = await auth.getUser(decodedCookie.uid);

  return user;
}
