import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';


interface AuthPageProps {
  formType: 'login' | 'signup';
}

const AuthPage: React.FC<AuthPageProps> = ({ formType }) => {
    const navigate = useNavigate(); // Hook to programmatically change routes

    const handleLogin = (email: string, password: string) => {
        console.log("Login attempted with:", email, password);

    };

    const handleSignUp = (username: string, email: string, password: string) => {
        console.log("Sign Up attempted with:", username, email, password);

    };

    // Functions to switch URLs (which triggers AuthPage to re-render with new formType)
    const switchToSignUp = () => {
        navigate('/signup');
    };

    const switchToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <div className="flex items-center space-x-1.5 p-2 md:px-6 lg:px-8 mt-2">
                <img src="/src/assets/Pilllogo.png" alt="Pill Sure Logo" className="w-6 h-6 md:w-7 h-7 object-contain" />
                <div>
                    <h1 className="text-lg md:text-2xl font-bold text-blue-900 leading-tight">Pill Sure</h1>
                    <div className="w-8 h-0.5 bg-gray-300 mt-0.5"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row flex-grow items-stretch">
                <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4 md:p-0.5 lg:p-1">
                    {/* Conditionally render LoginForm or SignUpForm based on the URL's formType */}
                    {formType === 'login' ? (
                        <LoginForm onLogin={handleLogin} onSwitchToSignUp={switchToSignUp} />
                    ) : (
                        <SignUpForm onSignUp={handleSignUp} onSwitchToLogin={switchToLogin} />
                    )}
                </div>

                <div className="hidden md:flex md:w-1/2 items-center justify-center bg-blue-100 p-4 md:p-0.5 lg:p-1">
                    <img
                        src="src\assets\loginImg.png"
                        alt="Medical illustration"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white p-2 md:p-3 lg:p-3">
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-3">
                    <div className="flex items-center text-center md:text-left">
                        <img
                            src="/src/assets/Pilllogo.png"
                            alt="Pill Sure Logo"
                            className="w-7 h-7 object-contain mr-1.5"
                        />
                        <p className="text-sm md:text-lg font-bold text-blue-900 leading-tight">Verified Prescriptions, Trusted Medications</p>
                    </div>

                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            className="flex-grow px-2 py-1.5 border border-gray-300 rounded-l-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                            placeholder="Enter your email"
                            required
                        />
                        <button className="px-2 py-1.5 bg-blue-500 text-white font-semibold rounded-r-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs">
                            Subscribe
                        </button>
                    </div>
                </div>

                <p className="text-gray-500 text-xs text-center">Copyright © Pill Sure | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default AuthPage;