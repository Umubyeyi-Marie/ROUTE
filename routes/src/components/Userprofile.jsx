import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Userprofile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">User Profile</h2>
      <p className="mb-2 text-gray-600"><span className="font-bold">Name:</span> {user.name}</p>
      <p className="text-gray-600"><span className="font-bold">Email:</span> {user.email}</p>
    </div>
  );
}
