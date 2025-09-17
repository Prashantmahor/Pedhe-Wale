import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", { email, password });
      localStorage.setItem("token", res.data.token); // token save
      alert("Login successful!");
      if (res.status === 200) {
        navigate("/"); 
      }
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
    
  };

  return (
    <div className="container d-flex justify-content-center align-items-center " style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-3">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary px-3 w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
