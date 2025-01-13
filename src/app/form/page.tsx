"use client"; 
import i18next from "i18next";
import { FC, useState } from "react";

type FormData = {
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
};

const Form: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    const phoneRegex = /^[0-9]{11}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.FirstName.trim()) {
      newErrors.FirstName = i18next.t("first name required");
    }

    if (!formData.LastName.trim()) {
      newErrors.LastName = i18next.t("last name is required");
    }

    if (!formData.Phone.trim() || !phoneRegex.test(formData.Phone)) {
      newErrors.Phone = i18next.t("valid phone is required");
    }

    if (!formData.Email.trim() || !emailRegex.test(formData.Email)) {
      newErrors.Email = i18next.t("valid email required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return; 
    }

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
              {i18next.t("firstName")}
            </label>
            <input
              placeholder={i18next.t("firstName")}
              type="text"
              id="firstName"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.FirstName ? "border-red-500" : "border-gray-300"
              }`}
              // required
            />
            {errors.FirstName && (
              <p className="text-red-500 text-sm">{errors.FirstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block ">
              {i18next.t("lastName")}
            </label>
            <input
              placeholder={i18next.t("lastName")}
              type="text"
              id="lastName"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.LastName ? "border-red-500" : "border-gray-300"
              }`}
              // required
            />
            {errors.LastName && (
              <p className="text-red-500 text-sm">{errors.LastName}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block ">
            {i18next.t("phone")}
          </label>
          <input
            placeholder={i18next.t("phone")}
            type="text"
            id="phoneNumber"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.Phone ? "border-red-500" : "border-gray-300"
            }`}
            // required
          />
          {errors.Phone && (
            <p className="text-red-500 text-sm">{errors.Phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block">
            {i18next.t("Email")}
          </label>
          <input
            placeholder={i18next.t("Email")}
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.Email ? "border-red-500" : "border-gray-300"
            }`}
            // required
          />
          {errors.Email && (
            <p className="text-red-500 text-sm">{errors.Email}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-700 text-white rounded mt-4"
        >
          {i18next.t("send")}
        </button>
      </form>
    </div>
  );
};

export default Form;
