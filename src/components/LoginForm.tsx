import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onSwitchToSignUp: () => void; // Function to trigger URL change to /signup
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 md:p-7">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-1">Sign In</h2>
        <p className="text-sm text-gray-600">Enter your credentials to continue</p>
      </div>

      {/* Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm mb-0.5">Email</label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Email"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </span>
          </div>

        </div>

        <div>
          <label className="block text-gray-700 text-sm mb-0.5">Password</label>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Password"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium text-base hover:bg-blue-700 transition"
        >
          Log in
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-3 text-gray-500 text-xs">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Logins */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-2.5 px-3 rounded-lg hover:bg-gray-50 transition text-sm"
          >
            <img src="/src/assets/Google__G__logo.svg.webp" alt="Google" className="w-4 h-4" />
            <span>Log in with Google</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-2.5 px-3 rounded-lg hover:bg-gray-50 transition text-sm"
          >
            <img src="/src/assets/facebook-svgrepo-com.svg" alt="Facebook" className="w-4 h-4" />
            <span>Log in with Facebook</span>
          </button>
        </div>

        {/* Forgot Link and Switch to Sign Up */}
        <div className="text-center pt-2">
          <p className="text-gray-600 text-sm mt-2">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToSignUp} // Calls the function to change URL
              className="text-blue-600 hover:underline focus:outline-none bg-transparent border-none p-0 cursor-pointer"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;