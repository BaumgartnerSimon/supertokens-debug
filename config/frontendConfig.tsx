import SessionReact from "supertokens-auth-react/recipe/session";
import { appInfo } from "./appInfo";
import ThirdPartyPasswordless, { Apple, Facebook, Google } from "supertokens-auth-react/recipe/thirdpartypasswordless";

export const frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      ThirdPartyPasswordless.init({
        useShadowDom: false,
        contactMethod: "EMAIL",
        signInUpFeature: {
          disableDefaultUI: true,
          providers: [Google.init(), Facebook.init(), Apple.init()]
        }
      }),
      SessionReact.init()
    ]
  };
};
