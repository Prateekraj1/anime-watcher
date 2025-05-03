"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

export default function Signup() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const { setIsLoggedIn, setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setIsLoggedIn(true);
        setUser(data);
        router.push("/login");
      } else {
        setError("Signup failed. Try again.");
      }
    } catch {
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0f0617]">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Signup</h2>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Sign Up
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
}
