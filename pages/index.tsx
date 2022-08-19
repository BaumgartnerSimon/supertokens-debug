import type {NextPage} from 'next'

import SuperTokensReact from "supertokens-auth-react";

import {frontendConfig} from "../config/frontendConfig";
import {supertokens} from "../auth/supertokens";
import React, {useState} from "react";

if (typeof window !== "undefined") {
  SuperTokensReact.init(frontendConfig());
}

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  return (
    <div style={{display: "flex", flexDirection: "column", width: "fit-content"}}>
      <div>
        <input
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => supertokens().passwordLessStart({email})}>
          Send Email
        </button>
      </div>
      <div>
        <input
        name="code"
        placeholder="code"
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={() => supertokens().passwordLessLogin({otpCode: code})}>
        Consume code
      </button>
      </div>
    </div>
  )
}

export default Home
