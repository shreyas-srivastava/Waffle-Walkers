import React, { useState } from 'react';
import axios from 'axios';
import { fadeIn, fadeOut } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FadeIn = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;

const FadeOut = styled.div`
  animation: 1s ${keyframes`${fadeOut}`};
`;

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    // Send a request to the backend API to send the message
    axios
      .post('/api/contact', { name, email, message })
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to send message');
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {success ? (
        <FadeIn>
          <div>
            Thank you for your message! We will get back to you as soon as possible.
          </div>
        </FadeIn>
      ) : (
        <FadeOut>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Message:
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <br />
            <button type="submit">Send Message</button>
          </form>
        </FadeOut>
      )}
    </div>
  );
};

export default ContactUs;
