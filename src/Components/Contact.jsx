import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., send data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div style={{ width: '400px' }}>
        <h3 className="text-center">Contact Me</h3>
       <div className="form border rounded p-2 mb-5">
       <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control border border-3 border-primary" // Add border class
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name" // Add placeholder
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control border border-3 border-primary" // Add border class
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email" // Add placeholder
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control border border-3 border-primary" // Add border class
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message" // Add placeholder
              required
            ></textarea>
          </div>

          <div className="button text-center ">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
       </div>
      </div>
    </div>
  );
};

export default Contact;
