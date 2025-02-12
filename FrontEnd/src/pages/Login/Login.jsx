// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';
// import { LoginData } from '../../utils/details';

// const Login = () => {
//     const { login } = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = (e) => {
//         e.preventDefault();
        
//         if (login(data)) {
//             alert('Login successful');
//         } else {
//             alert('Invalid credentials');
//         }
//     };

//     return (
//         <div className="flex justify-center text-base items-center h-screen">
//             <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//             <h1 className="text-[50px] font-['Cookie'] text-center py-4">
//             Crimers
//           </h1>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Email Address:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         placeholder='Enter email address'
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-2 text-[10px] border border-gray-300 rounded mt-1"
//                         required
//                     />
//                 </div>
//                 <div className="mb-">
//                     <label className="block text-gray-700">Password:</label>
//                     <input
//                         type="password"
//                         placeholder='Enter your password'
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-2 text-[10px] border border-gray-300 rounded mt-1"
//                         required
//                     />
//                 </div>
//                 <p className="text-right text-[10px] mb-4">Forgot Password?</p>

//                <div className="w-full mx-auto text-center"> 
//                 <Link to="/otp" >
//                 <button type="submit" className="bg-primary text-lg px-16 text-white p-2 rounded">Login</button>
//                 </Link>
//                 </div>
//                 <div className="mt-4 text-center">
//                     <p className="text-[10px] text-gray-700">Don't have an account? <Link to="/register" className="text-primary">Register</Link></p>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;


const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login