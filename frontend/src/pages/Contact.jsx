import React, { useState } from "react";
import axios from "axios"; // <-- import axios
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(""); // For server errors

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Send data to backend
        const res = await axios.post("http://localhost:5000/api/contact", formData);

        // If successful
        if (res.status === 201) {
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setServerError("");
          setTimeout(() => setSubmitted(false), 3000);
        }
      } catch (err) {
        console.error(err);
        setServerError(err.response?.data?.error || "Server error. Try again later.");
      }
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="intro">
        We’d love to hear from you! Reach out with any questions, suggestions,
        or feedback about EduVision.
      </p>

      <div className="contact-content">
        {/* Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

          {submitted && <p className="success">✅ Message sent successfully!</p>}
          {serverError && <p className="error">{serverError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
