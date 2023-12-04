import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.API_KEY;
  const baseurl = "https://api.essentialhub.com/api/v2/services";

  if (!apiKey) {
    res.status(500).json({ message: "API key is undefined" });
    return;
  }

  const queryParams = new URLSearchParams();
  Object.entries(req.query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => item && queryParams.append(key, item));
    } else if (value) {
      queryParams.append(key, value);
    }
  });

  try {
    const url = `${baseurl}?${queryParams.toString()}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
