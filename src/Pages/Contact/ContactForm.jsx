import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    notRobot: false,
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Invalid full name';
        break;
      case 'email':
        if (!value) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email';
        break;
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^\d{7,15}$/.test(value.replace(/\s+/g, ''))) return 'Invalid phone number';
        break;
      case 'company':
        if (!value.trim()) return 'Company name is required';
        break;
      case 'notRobot':
        if (!value) return 'Please confirm you are not a robot';
        break;
      default:
        return null;
    }
    return null;
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    const error = validateField(name, newValue);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    } else {
      setErrors(newErrors);
    }
  };

    

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 space-y-4"
    >
      <div>
        <label className="text-lg font-normal text-[#98A2B3] ">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 text-base font-normal border-[#D0D5DD] border-[1px]  rounded bg-[#E9E9E9]"
        />
        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
      </div>

      <div>
        <label className="text-lg font-normal text-[#98A2B3] ">What's your work email?</label>
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 text-base font-normal border-[#D0D5DD] border-[1px]  rounded bg-[#E9E9E9]"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      <div>
        <label className="text-lg font-normal text-[#98A2B3] ">Phone number</label>
        <div className="flex mt-1">
          <select className=" rounded-l px-2 border-[#D0D5DD] border-[1px] bg-[#E9E9E9]">
            <option>IND</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          <input
            type="text"
            name="phone"
            placeholder="000 0000 000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border-l-0 text-base font-normal rounded-r border-[#D0D5DD] border-[1px] bg-[#E9E9E9]"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
      </div>

      <div>
        <label className="text-lg font-normal text-[#98A2B3] ">Company Name</label>
        <input
          type="text"
          name="company"
          placeholder="Company name"
          value={formData.company}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 text-base font-normal border-[#D0D5DD] border-[1px]  rounded bg-[#E9E9E9]"
        />
        {errors.company && <p className="text-red-500 text-xs">{errors.company}</p>}
      </div>

      <div>
        <label className="text-lg font-normal text-[#98A2B3] ">Message (optional)</label>
        <textarea
          name="message"
          placeholder="Please enter any additional information"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 text-base font-normal border-[#D0D5DD] border-[1px]  rounded bg-[#E9E9E9]"
          rows={3}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="notRobot"
          checked={formData.notRobot}
          onChange={handleChange}
          className="form-checkbox w-4 h-4 border-[1px] border-[#F27F0C]"
        />
        <label className="text-lg font-normal text-[#98A2B3] ">I’m not a robot</label>
      </div>
      {errors.notRobot && <p className="text-red-500 text-xs">{errors.notRobot}</p>}

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-full mt-4 hover:bg-gray-800 transition"
      >
        Submit
      </button>
    </form>
  );
}
