import type { RequestHandler } from "@sveltejs/kit";
import { PB_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ params, fetch }) => {
  const { filename } = params;

  const pocketBaseUrl = `${PB_URL}/api/files/projects/${filename}`;

  const response = await fetch(pocketBaseUrl);

  if (!response.ok) {
    return new Response("Image not found", { status: 404 });
  }

  return new Response(await response.arrayBuffer(), {
    headers: {
      "Content-Type": response.headers.get("Content-Type") || "image/png",
      "Cache-Control": "public, max-age=86400"
    }
  });
};