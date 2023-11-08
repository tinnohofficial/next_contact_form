"use server";
import { sql } from "@vercel/postgres";

export async function postMessage(formData) {
  const email = formData.get("email");
  const message = formData.get("message");
  await sql`INSERT INTO messages (email, message) VALUES (${email}, ${message})`;
}
