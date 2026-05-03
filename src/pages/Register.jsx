import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');
  const { register, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = register(name, email, photoUrl, password);
    if (success) {
      navigate('/login');
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
          Create Account 🐄
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-200">Name</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1 bg-white/80 focus:bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
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

          {/* Photo */}
          <div>
            <label className="text-sm text-gray-200">Photo URL (optional)</label>
            <input
              type="url"
              className="input input-bordered w-full mt-1 bg-white/80 focus:bg-white"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          {/* Password */}
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

          {/* Button */}
          <button className="btn w-full bg-[#22c55e] hover:bg-[#16a34a] text-white border-none mt-2">
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-gray-300">OR</div>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="btn w-full bg-white text-black hover:bg-gray-200"
        >
          <FcGoogle className="text-xl mr-2" />
          Continue with Google
        </button>

        {/* Login link */}
        <p className="text-center text-gray-300 mt-5">
          Already have an account?{' '}
          <Link to="/login" className="text-green-400 hover:underline">
            Login here
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
