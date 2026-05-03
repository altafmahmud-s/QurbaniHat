import { Link } from 'react-router-dom';
import animalData from '../data/animals.json';
import { FaHeart, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { TbCurrencyTaka } from "react-icons/tb";


const Home = () => {
  const featuredAnimals = animalData.slice(0, 4);

  return (

    <div className="container mx-auto px-4">
      
      {/* Hero Section part  with Image Left-Right Layout */}
      <div className="animate__animated animate__fadeInDown hero min-h-[550px] rounded-2xl my-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          
          {/* Right Side - Image */}
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600" 
              alt="Premium Cow for Qurbani" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0"
            />
          </div>
          
          {/* Left Side - Text Content part */}
          <div className="flex-1 text-center lg:text-left text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Find Your Perfect <br />
              <span className="text-yellow-400">Qurbani Animal</span>
            </h1>
            <p className="py-6 text-gray-100">
              Premium quality cows and goats for sacrifice. <br />
              Health guaranteed, fully vaccinated.
            </p>
            <Link to="/animals" className="btn bg-yellow-500 hover:bg-yellow-600 border-none text-white btn-lg">
              Browse Animals
            </Link>
          </div>
          
        </div>
      </div>



      {/* Featured Animals with animation  part*/}

      <h2 className="text-3xl font-bold text-center my-8 animate__animated animate__fadeIn">Featured Animals</h2>

        {/* { 4 card part home showing} */}
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredAnimals.map((animal, index) => (
          <div 
            key={animal.id} 
            className={`animate__animated animate__fadeInUp card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >

            <figure className="h-64 overflow-hidden">
              <img src={animal.image} alt={animal.name} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{animal.name}</h2>
              <div className="flex items-center text-2xl font-bold text-primary">
  <TbCurrencyTaka className="mr-1" />
  <span>{animal.price.toLocaleString()}</span>
</div>
              <p className="text-gray-600">{animal.breed}</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${animal.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* Qurbani Tips part and emoji used */}

      <div className="animate__animated animate__fadeInLeft card bg-success text-success-content my-12">
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
      </div>

      {/* Top Breeds  part and emoji used*/}

      <div className="animate__animated animate__fadeInRight card bg-primary text-primary-content my-12">
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
      </div>
      
    </div>
  );
};

export default Home;