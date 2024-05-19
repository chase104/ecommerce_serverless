import { useState } from "react";
import axios from "axios";
import validator from "validator";
import "bootstrap/dist/css/bootstrap.min.css";

function sanitizeInput(input) {
  return input.replace(/<[^>]+>/g, "").trim(); // Strip HTML and trim whitespace
}

const SignupLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setErrors({}); // Clear errors on view change
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    if (name === "email") {
      setEmail(sanitizedValue);
    } else {
      setPassword(sanitizedValue);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validator.isEmail(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!validator.isLength(password, { min: 6 })) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const userData = { email, password };
    const url = isLogin ? "/api/login" : "/api/signup";

    try {
      const response = await axios.post(url, userData);
      console.log(response.data);
      alert("Success!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  const handleGuestLogin = async () => {
    setEmail("guest@example.com");
    setPassword("guest123");
    try {
      const response = await axios.post("/api/login", {
        email: "guest@example.com",
        password: "guest123",
      });
      console.log(response.data);
      alert("Logged in as guest!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">
                {isLogin ? "Login" : "Signup"}
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  {isLogin ? "Login" : "Signup"}
                </button>
              </form>
              {isLogin && (
                <button
                  className="btn btn-secondary w-100 mt-2"
                  onClick={handleGuestLogin}
                >
                  Login as Guest
                </button>
              )}
              <button
                className="btn btn-link w-100 mt-2"
                onClick={handleToggle}
              >
                {isLogin
                  ? "Need an account? Signup"
                  : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
