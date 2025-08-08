import React, { useState } from "react";
import "../css/contacts.scss";

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedFields, setFocusedFields] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const handleBlur = (fieldName) => {
    if (!formData[fieldName]) {
      setFocusedFields((prev) => ({
        ...prev,
        [fieldName]: false,
      }));
    }
  };

  const getInputBlockClass = (fieldName) => {
    return `input-block ${focusedFields[fieldName] || formData[fieldName] ? "focus" : ""}`;
  };

  return (
    <div className="contact-page">
      <h1>
        Responsive Material Design Form
        <small>
          Material Design delivers a cleaner and flatter user interface
        </small>
      </h1>
      <section className="contact-wrap">
        <form action="" className="contact-form">
          <div className="col-sm-6">
            <div className={getInputBlockClass("firstName")}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleInputChange}
                onFocus={() => handleFocus("firstName")}
                onBlur={() => handleBlur("firstName")}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className={getInputBlockClass("lastName")}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleInputChange}
                onFocus={() => handleFocus("lastName")}
                onBlur={() => handleBlur("lastName")}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className={getInputBlockClass("email")}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className={getInputBlockClass("subject")}>
              <label htmlFor="subject">Message Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleInputChange}
                onFocus={() => handleFocus("subject")}
                onBlur={() => handleBlur("subject")}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className={`${getInputBlockClass("message")} textarea`}>
              <label htmlFor="message">Drop your message here</label>
              <textarea
                rows="3"
                name="message"
                id="message"
                className="form-control"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus("message")}
                onBlur={() => handleBlur("message")}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <button type="submit" className="square-button">
              Send
            </button>
          </div>
        </form>
      </section>

      <div className="made-with-love">
        Made with
        <i>♥</i> by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://codepen.io/nikhil8krishnan"
        >
          Nikhil Krishnan
        </a>
      </div>
    </div>
  );
};

export default Contacts;
