import { useState } from 'react';
import { Link } from 'react-router-dom';
import animalData from '../data/animals.json';

const AllAnimals = () => {
  const [sortBy, setSortBy] = useState('default');
  const [animals, setAnimals] = useState(animalData);

  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
    
    let sorted = [...animals];
    if (value === 'low-to-high') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === 'high-to-low') {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted = animalData;
    }
    setAnimals(sorted);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">All Animals</h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Sort by Price:</span>
          </label>
          <select className="select select-bordered" onChange={handleSort} value={sortBy}>
            <option value="default">Default</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animals.map(animal => (
          <div key={animal.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="h-64 overflow-hidden">
              <img src={animal.image} alt={animal.name} className="w-full h-full object-cover hover:scale-110 transition duration-300" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{animal.name}</h2>
              <div className="badge badge-secondary">{animal.type}</div>
              <p className="text-sm text-gray-600">Breed: {animal.breed}</p>
              <p className="text-2xl font-bold text-primary mt-2">৳{animal.price.toLocaleString()}</p>
              <p className="text-sm">📍 {animal.location}</p>
              <div className="card-actions justify-end mt-4">
                <Link to={`/details/${animal.id}`} className="btn btn-primary">
                 <p className="text-gray-200">View Details</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;