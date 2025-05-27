import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // optional icon

export const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Goes back one step in the history stack
  };

  return (
    <button onClick={goBack}>
      <ArrowLeft className='mr-1 bg-transparent' />
    </button>
  );
};
