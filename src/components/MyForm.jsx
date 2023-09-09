import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    isChecked: false,
    selectedSalary: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Basic validation rules
    if (formData.age < 18 || formData.age > 65 || isNaN(formData.age)) {
      newErrors.age = 'Age must be between 18 and 65';
    }
    if (
      formData.phoneNumber.length < 8 ||
      formData.phoneNumber.length > 10 ||
      isNaN(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = 'Phone number must be 8-10 digits';
    }

    setErrors(newErrors);

    // Check if there are errors
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      console.log('Form data:', formData);
    }
  };

  return (
    <div>
      <div className="cont">
        <form onSubmit={handleSubmit}>
          <div className="box">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="box">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>
          <div className="box">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <label>
            Employee?
            <input
              type="checkbox"
              name="isChecked"
              checked={formData.isChecked}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Select Salary Range:
            <select
              name="selectedSalary"
              value={formData.selectedSalary}
              onChange={handleInputChange}
            >
              <option value="">Select Salary</option>
              <option value="lessThan500">$500 or Less</option>
              <option value="upTo1000">Up to $1000</option>
              <option value="upTo15000">Up to $15000</option>
            </select>
          </label>
          <button type="submit" className="btn" disabled={isSubmitted}>
            Submit
          </button>
        </form>
        {isSubmitted && <p className="success">Form submitted successfully!</p>}
      </div>
    </div>
  );
}

export default MyForm;
