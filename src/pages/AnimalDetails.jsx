import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import animalData from '../data/animals.json';
import toast from 'react-hot-toast';

const AnimalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const animal = animalData.find(a => a.id === parseInt(id));
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: ''
  });

  if (!animal) {
    return <div className="container mx-auto px-4 py-8 text-center">Animal not found</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please login to book');
      navigate('/login');
      return;
    }
    
    setFormData({ name: user?.name || '', email: user?.email || '', phone: '', address: '' });
    toast.success(`Successfully booked ${animal.name}! We'll contact you soon.`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card bg-base-100 shadow-xl">
          <figure className="h-96 overflow-hidden">
            <img src={animal.image} alt={animal.name} className="w-full h-full object-cover" />
          </figure>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-3xl">{animal.name}</h1>
            <div className="badge badge-primary badge-lg">{animal.type}</div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-gray-600">Breed</p>
                <p className="font-bold">{animal.breed}</p>
              </div>
              <div>
                <p className="text-gray-600">Price</p>
                <p className="text-2xl font-bold text-primary">৳{animal.price.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-600">Weight</p>
                <p className="font-bold">{animal.weight} kg</p>
              </div>
              <div>
                <p className="text-gray-600">Age</p>
                <p className="font-bold">{animal.age} years</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-600">Location</p>
                <p className="font-bold">📍 {animal.location}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-600">Description</p>
                <p>{animal.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="card bg-base-100 shadow-xl mt-8">
        <div className="card-body">
          <h2 className="card-title text-2xl">Book This Animal</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label mr-2">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" className="input input-bordered" value={formData.name} onChange={handleChange} required />
            </div>
            
            <div className="form-control">
              <label className="label mr-2">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" className="input input-bordered" value={formData.email} onChange={handleChange} required />
            </div>
            
            <div className="form-control">
              <label className="label mr-2">
                <span className="label-text">Phone</span>
              </label>
              <input type="tel" name="phone" className="input input-bordered" value={formData.phone} onChange={handleChange} required />
            </div>
            
            <div className="form-control">
              <label className="label mr-2">
                <span className="label-text">Address</span>
              </label>
              <textarea name="address" className="textarea textarea-bordered" value={formData.address} onChange={handleChange} required rows="3"></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">Submit Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;