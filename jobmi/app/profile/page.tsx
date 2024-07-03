"use client";

import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Profile = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    job: '',
    profilePicture: ''
  });

  useEffect(() => {
    if (session) {
      axios.get(`https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api/users/${session.user.email}`)
        .then(response => {
          setFormData(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        });
    }
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session) {
      console.error('Utilisateur non connecté');
      return;
    }

    try {
      const response = await axios.put(`https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api/users/${session.user.email}`, formData);
      console.log('Informations mises à jour:', response.data);
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="font-semibold">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="p-2 border rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="font-semibold">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="p-2 border rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded-lg"
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="font-semibold">Ville</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="p-2 border rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-semibold">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="job" className="font-semibold">Emploi</label>
          <input
            type="text"
            id="job"
            name="job"
            value={formData.job}
            onChange={handleChange}
            className="p-2 border rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="profilePicture" className="font-semibold">Photo de profil</label>
          <input
            type="text"
            id="profilePicture"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            className="p-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="p-2 bg-blue-600 text-white rounded-lg">Mettre à jour</button>
      </form>
    </div>
  );
};

export default Profile;
