import { superTokensNextWrapper } from "supertokens-node/nextjs";
import { middleware } from "supertokens-node/framework/express";
import { NextApiRequest, NextApiResponse } from "next";
import { Request, Response } from "express";
import supertokens from "supertokens-node";
import { backendConfig } from "../../../config/backendConfig";
import NextCors from "nextjs-cors";

console.log("SUPERTOKENS INIT BACKEND");
supertokens.init(backendConfig());

export default async function superTokens(req: NextApiRequest & Request, res: NextApiResponse & Response) {
  try {
    await NextCors(req, res, {
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "http://localhost:3000",
      credentials: true,
      allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()]
    });

    await superTokensNextWrapper(
      async (next) => {
        await middleware()(req, res, next);
      },
      req,
      res
    );
    if (!res.writableEnded) {
      res.status(404).send("Not found");
    }
  } catch (e) {
    console.log(e);
  }
}
