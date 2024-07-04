"use client";

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
  job: string;
  profilePicture: string;
}

const Profile = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    job: '',
    profilePicture: ''
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (session?.user?.email) {
      console.log('Session user email:', session.user.email); // Log session user email
      axios.get(`${API_URL}/users/${session.user.email}`)
        .then(response => {
          console.log("User data fetched:", response.data); // Log the fetched data
          setFormData(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        });
    } else {
      console.log('Session or user email is undefined');
    }
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/users/${formData.email}`, formData);
      console.log('Informations mises à jour:', response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Erreur lors de la mise à jour des informations:', error);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <div>Vous devez être connecté pour accéder à cette page.</div>;
  }

  return (
    <div className="mt-[90px] max-w-screen-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Profil</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex flex-col">
              <label htmlFor={key} className="font-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={formData[key as keyof User]}
                onChange={handleChange}
                className="p-2 border rounded-lg"
              />
            </div>
          ))}
          <button type="submit" className="p-2 bg-blue-600 text-white rounded-lg">
            Mettre à jour
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-4">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex flex-row justify-between items-center">
              <p className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              <p>{formData[key as keyof User]}</p>
              <button onClick={() => setIsEditing(true)} className="p-2 bg-transparent border-none cursor-pointer">
                <img src="/media/icon-modifier.svg" alt="modifier" className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
