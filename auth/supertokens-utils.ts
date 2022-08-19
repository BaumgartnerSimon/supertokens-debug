export interface SuperTokens {

  passwordLessStart: ({email}: { email: string }) => void;

  passwordLessLogin: ({
                        otpCode
                      }: {
    otpCode: string;
  }) => void;
}
