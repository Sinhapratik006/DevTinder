import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmaiid] = useState("sinha@gmail.com");
  const [password, setpassword] = useState("helloworld");

  const Handlelogin = async () => {
    try {
      const res = await axios.post("http://localhost:5173/login", {
        emailId,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" flex justify-center my-10">
      <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-5">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setEmaiid(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4 " onClick={Handlelogin}>Login</button>
      </fieldset>
    </div>
  );
};
export default Login;
