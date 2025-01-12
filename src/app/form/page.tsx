"use client"; 
import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/user-informations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });
  
      if (response.ok) {
        alert("User Added Successfully");
        console.log("Data submitted successfully");
        setFormData({
          FirstName: "",
          LastName: "",
          Phone: "",
          Email: "",
        });
      } else {
        alert("Error while submitting data");
        console.error("Error submitting data:", await response.json());
      }
    } catch (error) {
      alert("Error while submitting data");
      console.error("Error submitting data:", error);
    }
  };
  

  return (
    <div className="max-w-md w-full p-4">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex gap-5">
          <div>
            <label htmlFor="firstName" className="block">
              First Name
            </label>
            <input
              placeholder="First Name"
              type="text"
              id="firstName"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block ">
              Last Name
            </label>
            <input
              placeholder="Last Name"
              type="text"
              id="lastName"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block ">
            Phone Number
          </label>
          <input
            placeholder="Phone Number"
            type="text"
            id="phoneNumber"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-700 text-white rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
