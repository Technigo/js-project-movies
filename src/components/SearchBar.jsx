import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  input {
    padding: 0.5rem;
    font-size: 1rem;
  }
  button {
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`;

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit} role="search" aria-label="Movie search">
      <input
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={e => setQuery(e.target.value)}
        aria-label="Search movies"
      />
      <button type="submit">Search</button>
    </Form>
  );
}; 