import toast from 'react-hot-toast'
import  { useState } from 'react';
const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState(false);
  
    const handleSignIn = (e) => {
      e.preventDefault();
  
      // Replace these values with your actual credentials
      const validUsername = 'urg';
      const validPassword = 'urg123';
  
      if (username === validUsername && password === validPassword) {
        setAuth(true);
        sessionStorage.setItem('auth', 'true');
        toast.success('Sign in successful!');
        console.log("login")
        window.location.href="/"
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#04A1A6]">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold text-[#04A1A6] mb-6">SilverExch</h1>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04A1A6] focus:border-[#04A1A6] text-gray-700"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04A1A6] focus:border-[#04A1A6] text-gray-700"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-[#04A1A6] text-white px-6 py-3 rounded-md w-full transition duration-300 hover:bg-[#048A93]"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignIn;