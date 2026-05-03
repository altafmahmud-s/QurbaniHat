// import { Link, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
// import { FaPaw } from 'react-icons/fa';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <div className="navbar bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg sticky top-0 z-50">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </label>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/animals">All Animals</Link></li>
//             {user && <li><Link to="/my-profile">My Profile</Link></li>}
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost text-xl text-white">
//           <FaPaw className="mr-2" /> QurbaniHat
//         </Link>
//       </div>
      
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 text-white">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/animals">All Animals</Link></li>
//           {user && <li><Link to="/my-profile">My Profile</Link></li>}
//         </ul>
//       </div>
      
//       <div className="navbar-end gap-2">
//         {user ? (
//           <>
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full">
//                   <img src={user.image || 'https://i.pravatar.cc/150'} alt={user.name} />
//                 </div>
//               </label>
//               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                 <li><Link to="/my-profile">Profile</Link></li>
//                 <li><button onClick={handleLogout}>Logout</button></li>
//               </ul>
//             </div>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
//             <Link to="/register" className="btn btn-secondary btn-sm">Register</Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;