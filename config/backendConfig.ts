import ThirdPartyPasswordlessNode from "supertokens-node/recipe/thirdpartypasswordless";
import { appInfo } from "./appInfo";
import { TypeInput } from "supertokens-node/types";

let { Google, Apple } = ThirdPartyPasswordlessNode;

export const backendConfig = (): TypeInput => {
  return {
    framework: "express",
    supertokens: {
      connectionURI: "http://localhost:3567"
    },
    appInfo,
    recipeList: [
      ThirdPartyPasswordlessNode.init({
        flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
        contactMethod: "EMAIL",
        providers: [
          Google({
            clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
            clientSecret: "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"
          }),
          Apple({
            clientId: "4398792-io.supertokens.example.service",
            clientSecret: {
              keyId: "7M48Y4RYDL",
              privateKey:
                "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
              teamId: "YWQCXGJRJL",
            },
          }),
        ]
      })
    ],
    isInServerlessEnv: true
  };
};
