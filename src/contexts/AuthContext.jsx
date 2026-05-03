import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    if (email && password) {
      const mockUser = {
        id: 1,
        name: email.split('@')[0],
        email: email,
        image: 'https://i.pravatar.cc/150?img=3'
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      toast.success('Login successful!');
      return true;
    }
    toast.error('Invalid credentials');
    return false;
  };

  const register = (name, email, photoUrl, password) => {
    if (name && email && password) {
      const mockUser = {
        id: Date.now(),
        name: name,
        email: email,
        image: photoUrl || 'https://i.pravatar.cc/150?img=3'
      };
      toast.success('Registration successful! Please login.');
      return true;
    }
    toast.error('Registration failed');
    return false;
  };

  const googleLogin = () => {
    const mockUser = {
      id: 2,
      name: 'Google User',
      email: 'google@gmail.com',
      image: 'https://i.pravatar.cc/150?img=4'
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    toast.success('Google login successful!');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
  };

  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    toast.success('Profile updated successfully!');
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, googleLogin, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};