import {SuperTokens} from "./supertokens-utils";
import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";

const superTokens: SuperTokens = {
  passwordLessStart: async ({
                              email
                            }: {
    email: string;
  }) => {
    console.log("passwordLessStart", email);
    ThirdPartyPasswordless.createPasswordlessCode({email}).catch((err) => {
      console.error("error: ", err);
    });
  },

  passwordLessLogin: async ({
                              otpCode
                            }: {
    otpCode: string;
  }) => {
    ThirdPartyPasswordless.consumePasswordlessCode({userInputCode: otpCode}).then((res) => {
      console.log("RES: ", res);
    }).catch((err) => {
      console.error("error: ", err);
    });
  },
};

export const supertokens = (): SuperTokens => {
  return superTokens;
};
