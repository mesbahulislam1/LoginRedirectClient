"use server";
import { baseUrl } from "./baseUrl";
import { getToken } from "./getToken";

export const serverMutation = async (path, method, data) => {
  const token = await getToken();

  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
