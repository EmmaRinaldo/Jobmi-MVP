"use client";

import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
  job: string;
  profilePicture: string;
}

interface EditingState {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  city: boolean;
  phone: boolean;
  job: boolean;
  profilePicture: boolean;
}

const Profile = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    job: '',
    profilePicture: ''
  });
  const [isEditing, setIsEditing] = useState<EditingState>({
    firstName: false,
    lastName: false,
    email: false,
    city: false,
    phone: false,
    job: false,
    profilePicture: false
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("Session data:", session);
    const fetchData = async () => {
      if (session && session.user && session.user.email) {
        try {
          console.log("Fetching data for:", session.user.email); // Log the email
          const response = await axios.get(`https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api/users/${session.user.email}`);
          console.log("Response data:", response.data); // Log the response
          setFormData(response.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("Session or user email is undefined"); // Log if session or email is missing
      }
    };

    fetchData();
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session || !session.user || !session.user.email) {
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

  if (status === 'loading' || loading) {
    return <div>Chargement...</div>;
  }

  if (status === 'unauthenticated') {
    return <div>Vous devez être connecté pour accéder à cette page.</div>;
  }

  return (
    <div className="mt-[90px] max-w-screen-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Profil</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label htmlFor={key} className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            {isEditing[key as keyof EditingState] ? (
              <input
                type="text"
                id={key}
                name={key}
                value={formData[key as keyof FormData]}
                onChange={handleChange}
                className="p-2 border rounded-lg"
              />
            ) : (
              <p>{formData[key as keyof FormData]}</p>
            )}
            <button
              type="button"
              className="text-blue-500"
              onClick={() => setIsEditing({ ...isEditing, [key]: !isEditing[key as keyof EditingState] })}
            >
              Modifier
            </button>
          </div>
        ))}
        <button type="submit" className="p-2 bg-blue-600 text-white rounded-lg">Mettre à jour</button>
      </form>
    </div>
  );
};

export default Profile;
