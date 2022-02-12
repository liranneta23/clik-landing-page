// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDB } from "../../server/db";
import { EmailModel } from "../../server/models/email";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectDB();
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Please type in your email!" });
    }

    const isExists = await EmailModel.findOne({ email });
    if (isExists) {
      return res
        .status(400)
        .json({ message: "Email already added to our wish list!" });
    }

    const createEmail = await EmailModel.create({ email });

    if (!createEmail) {
      return res
        .status(400)
        .json({ message: "An error occured! Please try again!" });
    }

    return res
      .status(201)
      .json({ message: "Hurray!!! You have been added to the wait list!" });
  }
}
