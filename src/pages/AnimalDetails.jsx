import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { FaLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";

const AnimalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: ''
  });

  const [phoneError, setPhoneError] = useState('');

  const fetchAnimal = async () => {
    try {
      setLoading(true);
      const response = await fetch('/animals.json');
      const data = await response.json();
      const foundAnimal = data.find(a => a.id.toString() === id);
      setAnimal(foundAnimal);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimal();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="mt-4">Loading animal details...</p>
      </div>
    );
  }

  if (!animal) {
    return <div className="container mx-auto px-4 py-8 text-center">Animal not found</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === 'phone') {
      setPhoneError('');
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^01[3-9]\d{8}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Please login to book an animal');
      navigate('/login');
      return;
    }
    
    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid 11-digit Bangladeshi phone number');
      toast.error('Invalid phone number');
      return;
    }
    
    setFormData({ 
      name: user?.name || '', 
      email: user?.email || '', 
      phone: '', 
      address: '' 
    });
    setPhoneError('');
    toast.success(`Successfully booked ${animal.name}! We'll contact you soon.`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* image part*/}
        <div className="card bg-base-100 shadow-xl">
          <figure className="h-96 overflow-hidden">
            <img src={animal.image} alt={animal.name} className="w-full h-full object-cover" />
          </figure>
        </div>
        
        {/* Details part*/}
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
                <p className="text-2xl font-bold text-primary mt-2 flex items-center">
                  <TbCurrencyTaka className="mr-1" />
                  {animal.price.toLocaleString()}
                </p>
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
                <p className="font-bold flex items-center gap-1">
                  <FaLocationDot />
                  {animal.location}
                </p>
              </div>



              <div className="col-span-2">
                <p className="text-gray-600">Description</p>
                <p>{animal.description}</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Booking From*/}
      <div className="card bg-base-100 shadow-xl mt-8">

        <div className="card-body">
          <h2 className="card-title text-2xl">Book This Animal</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input 
                type="text" 
                name="name" 
                className="input input-bordered" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>


            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                name="email" 
                className="input input-bordered" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone <span className="text-red-500">*</span></span>
              </label>
              <input 
                type="tel" 
                name="phone" 
                className={`input input-bordered ${phoneError ? 'input-error' : ''}`} 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="017XXXXXXXX"
                maxLength="11"
              />  
              
              {phoneError && (
                <label className="label">
                  <span className="label-text-alt text-red-500">{phoneError}</span>
                </label>
              )}

              <label className="label">
                <span className="label-text-alt text-gray-500">Must be 11 digits & start with 01 (e.g., 017xxxxxxxx)</span>
              </label>
            </div>
            

            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea 
                name="address" 
                className="textarea textarea-bordered" 
                value={formData.address} 
                onChange={handleChange} 
                required 
                rows="3"
              >

              </textarea>
              
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;