// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';

// const MyProfile = () => {
//   const { user } = useContext(AuthContext);

//   if (!user) {
//     return <div className="container mx-auto px-4 py-8 text-center">Please login to view profile</div>;
//   }

//   return (
//     <div className="min-h-[80vh] flex items-center justify-center px-4">
//       <div className="card w-full max-w-md bg-base-100 shadow-2xl">
//         <div className="card-body text-center">
//           <div className="avatar justify-center">
//             <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//               <img src={user.image || 'https://i.pravatar.cc/150'} alt={user.name} />
//             </div>
//           </div>
          
//           <h2 className="card-title justify-center text-2xl mt-4">{user.name}</h2>
          
//           <div className="divider"></div>
          
//           <div className="text-left space-y-2">
//             <p><span className="font-bold">Email:</span> {user.email}</p>
//             <p><span className="font-bold">Member since:</span> {new Date().toLocaleDateString()}</p>
//           </div>
          
//           <div className="card-actions justify-center mt-6">
//             <Link to="/update-profile">
//               <button className="btn btn-primary">Update Profile</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;