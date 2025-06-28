import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);

  // Load saved data from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('contactForm'));
    if (saved) {
      setForm(saved);
      setCharCount(saved.message?.length || 0);
    }
  }, []);

  // Save form data to localStorage
  useEffect(() => {
    localStorage.setItem('contactForm', JSON.stringify(form));
  }, [form]);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required';
      case 'email':
        if (!value.trim()) return 'Email is required';
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email';
      case 'message':
        return value.trim() ? '' : 'Message is required';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));

    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      alert('Message sent (simulated).');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          onBlur={(e) => setErrors({ ...errors, name: validateField('name', e.target.value) })}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          onBlur={(e) => setErrors({ ...errors, email: validateField('email', e.target.value) })}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          onBlur={(e) => setErrors({ ...errors, message: validateField('message', e.target.value) })}
          maxLength="500"
        />
        {errors.message && <span className="error">{errors.message}</span>}
        <div className="char-count">{charCount}/500</div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
