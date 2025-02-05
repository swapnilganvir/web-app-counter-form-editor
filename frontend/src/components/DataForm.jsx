import React, { useEffect, useState } from 'react';
import './DataForm.css';

const DataForm = ({ formData, setFormData }) => {
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  useEffect(() => {
    window.addEventListener('beforeunload', e => e.preventDefault());

    return () => {
      window.removeEventListener('beforeunload', e => e);
    };
  }, []);

  return (
    <div className="form">
      <h2>Survey form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          required
          onChange={e => handleChange(e)}
        />
        <br />

        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          required
          onChange={e => handleChange(e)}
        />
        <br />

        <label htmlFor="phone">Phone : </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          required
          placeholder="9876987698"
          pattern="[0-9]{10}"
          onChange={e => handleChange(e)}
        />
        <br />

        <label htmlFor="address">Address : </label>
        <br />
        <textarea
          id="address"
          name="address"
          value={formData.address}
          required
          onChange={e => handleChange(e)}
          maxLength={150}
        ></textarea>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DataForm;
