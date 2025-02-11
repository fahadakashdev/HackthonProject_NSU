import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here
    };

    return (
        <div className="flex justify-center text-base items-center h-scree my-20">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h1 className="text-[50px] font-['Cookie'] text-center py-4">
                    Crimers
                </h1>
                <div className="mb-4">
                    <label className="block text-gray-700">First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        placeholder="Enter your first name"
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-2 text-[10px] border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email Address:</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter email address"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 text-[10px] border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 text-[10px] border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm your password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 text-[10px] border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone Number:</label>
                    <input
                        type="tel"
                        value={phone}
                        placeholder="Enter your phone number"
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2 text-[10px] border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <div className="w-full mx-auto text-center">
                    <button type="submit" className="bg-primary text-lg px-16 text-white p-2 rounded">Register</button>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-[10px] text-gray-700">Already have an account? <Link to="/login" className="text-primary">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;