import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
  };

  return (
    <div className="flex justify-center text-base items-center h-screen">
      <form onSubmit={handleOtpSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-[50px] font-['Cookie'] text-center py-4">
          Crimers
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700">Enter OTP:</label>
          <input
            type="text"
            value={otp}
            placeholder="Enter the OTP sent to your email"
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 text-[10px] border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="w-full mx-auto text-center">
          <button type="submit" className="bg-primary text-lg px-16 text-white p-2 rounded">Verify OTP</button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-[10px] text-gray-700">Didn't receive the OTP? <Link to="/resend-otp" className="text-primary">Resend OTP</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Otp;