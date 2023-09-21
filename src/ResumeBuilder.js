import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    skills: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="resume-builder">
    <div className="resume-form me-4">
      <h2>Resume Builder</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
  
        {/* Add other form fields for phone, education, skills, experience, etc. */}
        {/* Example: */}
        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  
    <div className="resume-preview ">
      <h3>Resume Preview</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      {/* Display other entered information */}
      {/* Example: */}
      <p>Skills: {formData.skills}</p>
    </div>
  </div>
  
  
  );
};

export default ResumeBuilder;
