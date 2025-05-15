import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  background: #181818;
  border-radius: 2rem;
  padding: 0.2rem 0.5rem 0.2rem 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  min-width: 0;
  max-width: 340px;
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;

  input {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1rem;
    outline: none;
    width: 100%;
    min-width: 0;
    padding: 0.5rem 0;
    margin-right: 0.5rem;
    &::placeholder {
      color: #aaa;
      opacity: 1;
    }
  }
  button {
    background: linear-gradient(90deg, #ff9800 0%, #ff5722 100%);
    color: #fff;
    border: none;
    border-radius: 1.5rem;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    &:hover, &:focus {
      background: linear-gradient(90deg, #ffb74d 0%, #ff7043 100%);
      outline: none;
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0.2rem 0.5rem;
    box-sizing: border-box;
    input {
      font-size: 1rem;
      padding: 0.5rem 0.2rem;
      width: 100%;
    }
    button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
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