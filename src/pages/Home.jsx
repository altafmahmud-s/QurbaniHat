import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import animalData from '../data/animals.json';
import { FaHeart, FaShieldAlt, FaTruck } from 'react-icons/fa';

const Home = () => {
  const featuredAnimals = animalData.slice(0, 4);

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero min-h-[500px] rounded-2xl my-8"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <div className="hero-content text-center text-white">
          <div className="">
            <img src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400" alt="" />
          </div>
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Find Your Perfect Qurbani Animal</h1>
            <p className="py-6">Premium quality cows and goats for sacrifice. Health guaranteed.</p>
            <Link to="/animals" className="btn btn-primary btn-lg">
              Browse Animals
            </Link>
          </div>
        </div>
      </motion.div> */}

      <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative min-h-[500px] rounded-2xl my-8 overflow-hidden"
>

  {/*Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1200')",
    }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
    <div className="max-w-xl pt-20">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Find Your Perfect <span className="text-green-400">Qurbani Animal</span>
      </h1>

      <p className="py-6 text-gray-200">
        Premium quality cows and goats for sacrifice. Healthy and verified.
      </p>

      <Link
        to="/animals"
        className="btn bg-green-500 hover:bg-green-600 border-none text-white px-8"
      >
        Browse Animals
      </Link>
    </div>
  </div>

</motion.div>

      {/* Featured Animals */}
      <h2 className="text-3xl font-bold text-center my-8">Featured Animals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredAnimals.map((animal, index) => (
          <motion.div
            key={animal.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <figure className="h-64 overflow-hidden">
              <img src={animal.image} alt={animal.name} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{animal.name}</h2>
              <p className="text-2xl font-bold text-primary">৳{animal.price.toLocaleString()}</p>
              <p className="text-gray-600">{animal.breed}</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${animal.id}`} className="btn btn-primary">
                 <p className="text-gray-200">View Details</p> 
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Qurbani Tips */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card bg-success text-success-content my-12"
      >
        <div className="card-body">
          <h2 className="card-title text-2xl justify-center">🌙 Qurbani Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="text-center p-4">
              <FaHeart className="text-3xl mx-auto mb-2" />
              <h3 className="font-bold">Health Check</h3>
              <p>Ensure animal is healthy and active</p>
            </div>
            <div className="text-center p-4">
              <FaShieldAlt className="text-3xl mx-auto mb-2" />
              <h3 className="font-bold">Vaccination</h3>
              <p>Check vaccination records</p>
            </div>
            <div className="text-center p-4">
              <FaTruck className="text-3xl mx-auto mb-2" />
              <h3 className="font-bold">Transport</h3>
              <p>Arrange proper transport</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top Breeds */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card bg-primary text-primary-content my-12"
      >
        <div className="card-body">
          <h2 className="card-title text-2xl justify-center">🏆 Top Breeds for Qurbani</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="text-center p-4 bg-white/20 rounded-lg">
              <h3 className="font-bold text-lg">🐄 Sahiwal</h3>
              <p>Excellent meat quality</p>
            </div>
            <div className="text-center p-4 bg-white/20 rounded-lg">
              <h3 className="font-bold text-lg">🐄 Frisian</h3>
              <p>High weight gain</p>
            </div>
            <div className="text-center p-4 bg-white/20 rounded-lg">
              <h3 className="font-bold text-lg">🐐 Black Bengal</h3>
              <p>Tender meat</p>
            </div>
            <div className="text-center p-4 bg-white/20 rounded-lg">
              <h3 className="font-bold text-lg">🐐 Jamunapari</h3>
              <p>Premium breed</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;