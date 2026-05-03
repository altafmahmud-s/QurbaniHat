import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate('/');
    }
  };

  const handleGoogleLogin = () => {
    const success = googleLogin();
    if (success) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#192438] to-[#0f172a] px-4">

      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email  part*/}
          <div>
            <label className="text-sm text-gray-200">Email</label>
            <input
              type="email"
              className="input input-bordered w-full mt-1 bg-white/80 focus:bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password  part*/}
          <div>
            <label className="text-sm text-gray-200">Password</label>
            <input
              type="password"
              className="input input-bordered w-full mt-1 bg-white/80 focus:bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button  part*/}

          <button className="btn w-full bg-[#22c55e] hover:bg-[#16a34a] text-white border-none mt-2">
            Login
          </button>
        </form>

        {/* Divider  part*/}

        <div className="divider text-gray-300">OR</div>

        {/* Google Login part */}

        <button
          onClick={handleGoogleLogin}
          className="btn w-full bg-white text-black hover:bg-gray-200"
        >
          <FcGoogle className="text-xl mr-2" />
          Continue with Google
        </button>

        {/* Register Link  part*/}

        <p className="text-center text-gray-300 mt-5">
          Don't have an account?{' '}
          <Link to="/register" className="text-green-400 hover:underline">
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;