import React, { useState } from 'react';

interface SignUpFormProps {
  onSignUp: (username: string, email: string, password: string) => void; 
  onSwitchToLogin: () => void; 
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp, onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //  client-side validation
    onSignUp(username, email, password); 
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 md:p-7">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-1">Create Account</h2>
        <p className="text-sm text-gray-600">Join Pill Sure today!</p>
      </div>

      {/* Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm mb-0.5">Username</label>
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Username"
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
            {/* Lock Icon SVG */}
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
          Sign Up
        </button>

        <div className="text-center pt-3">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin} // Calls the function to change URL
              className="text-blue-600 hover:underline focus:outline-none bg-transparent border-none p-0 cursor-pointer"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;