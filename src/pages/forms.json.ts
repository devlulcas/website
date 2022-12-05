import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  const formID = import.meta.env.FORM_ID as string;

  if (!formID) {
    return responseMessage(500, "No form ID was provided");
  }

  const formData = await request.formData();

  if (!request.body) {
    return responseMessage(400, "Missing required fields");
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return responseMessage(400, "Missing required fields");
  }

  const endpoint = `https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.416427459=${name}&entry.1361307934=${email}.com&entry.1807814379=${message}&submit=Submit`;

  const res = await fetch(endpoint);

  if (res.status === 200) {
    return responseMessage(200, "Success");
  }

  return responseMessage(400, "Something went wrong");
};

function responseMessage(code: number, message: string) {
  const stringifiedMessage = JSON.stringify({
    status: code,
    body: message,
  });

  return new Response(stringifiedMessage, {
    status: code,
  });
}
