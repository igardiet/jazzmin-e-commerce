import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { USER, PASSWORD } from '../../helpers/magicWords'
import '../auth/auth.css'

export default function LoginContext() {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUser(event) {
    setUsername(event.target.value);
  }

  function handlePass(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username === USER && password === PASSWORD) {
      login();
      navigate("/checkout");
    }
  }

  return (
    <>
      <div className=" authStyle">
        <form className="logInForm" onSubmit={handleSubmit}>
          <h3
            className="fw-normal mb-3 pb-3 textColor"
            style={{ letterSpacing: "1px" }}
          >
            Log in
          </h3>
          <div className="form-outline mb-4">
            <label className="form-label">
              <input
                type="text"
                className="form-control form-control-lg"
                value={username}
                placeholder="Username"
                onChange={handleUser}
                required
              />
            </label>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">
              <input
                placeholder="Password"
                type="password"
                className="form-control form-control-lg"
                required
                value={password}
                onChange={handlePass}
              />
            </label>
          </div>
          <div className="pt-1 mb-4">
            <button
              className="btn btn-info btn-lg btn-block loginButton"
              type="submit"
            >
              Login
            </button>
          </div>
          <p className="small mb-5 pb-lg-2">
            <Link className="textColor" href="#!">
              Forgot password?
            </Link>
          </p>
          <p className="textColor">
            Don't have an account?{" "}
            <Link href="#!" style={{ color: "#EF1A2D" }}>
              Register here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
