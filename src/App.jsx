// import { Routes, Route } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import PrivateRoute from './components/PrivateRoute';
// import Home from './pages/Home';
// import AllAnimals from './pages/AllAnimals';
// import AnimalDetails from './pages/AnimalDetails';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import MyProfile from './pages/MyProfile';
// import UpdateProfile from './pages/UpdateProfile';
// import NotFound from './pages/NotFound';

// function App() {
//   return (
//     <>
//       <Toaster position="top-right" />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/animals" element={<AllAnimals />} />
//         <Route path="/details/:id" element={
//           <PrivateRoute>
//             <AnimalDetails />
//           </PrivateRoute>
//         } />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/my-profile" element={
//           <PrivateRoute>
//             <MyProfile />
//           </PrivateRoute>
//         } />
//         <Route path="/update-profile" element={
//           <PrivateRoute>
//             <UpdateProfile />
//           </PrivateRoute>
//         } />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;