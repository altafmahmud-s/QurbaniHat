import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || '');
  const [image, setImage] = useState(user?.image || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, image });
    navigate('/my-profile');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-2xl justify-center">Update Profile</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label mr-2">
                <span className="label-text">Name</span>
              </label>
              <input type="text" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            
            <div className="form-control">
              <label className="label mr-2">
                <span className="label-text">Image URL</span>
              </label>
              <input type="url" className="input input-bordered" value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://example.com/photo.jpg" />
              {image && (
                <div className="mt-2">
                  <img src={image} alt="Preview" className="w-20 h-20 rounded-full object-cover mx-auto" />
                </div>
              )}
            </div>
            
            <button type="submit" className="btn btn-primary w-full">Update Information</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;