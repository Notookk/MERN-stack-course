import React, { useState } from 'react'
import './formvalidator.css'
import './formvalidator.css'
function FormValidator() {
    const [errorMessages, setErrorMessages] = useState([]);

    const validatePassword = (password) => {
        const errors = [];
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 8;
        if (!isLongEnough) {
            errors.push("Password must be at least 8 characters long.");
        }
        if (!hasUpperCase) {
            errors.push("Password must contain at least one uppercase letter.");
        }
        if (!hasLowerCase) {
            errors.push("Password must contain at least one lowercase letter.");
        }
        if (!hasNumbers) {
            errors.push("Password must contain at least one number.");
        }
        if (!hasSpecialChar) {
            errors.push("Password must contain at least one special character.");
        }
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);

        const errors = [];

        if (!data.name || !data.email || !data.password) {
            if (!data.name) errors.push("Name is required.");
            if (!data.email) errors.push("Email is required.");
            if (!data.password) errors.push("Password is required.");
        }

        if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
            errors.push("Email is invalid.");
        }

        if (data.password) {
            const passwordErrors = validatePassword(data.password);
            errors.push(...passwordErrors);
        }

        if (errors.length > 0) {
            setErrorMessages(errors);
            return;
        }
        if (data.name.length <= 3) {
            setErrorMessages(["Name must be at least 3 characters long."]);
            return;
        }

        setErrorMessages(["Form submitted successfully!"]);
        console.log("Form is valid and submitted:", data);
    };
  return (
    <div className="form-container">
      <div>
        <h1>Form Validator Component</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" required />
          </div>
          
          <button type="submit">Submit</button>
          
          <div className="error-messages">
            {errorMessages.map((error, index) => (
              <div 
                key={index} 
                className={error.includes('successfully') ? 'success-message' : 'error-message'}
              >
                {error}
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormValidator