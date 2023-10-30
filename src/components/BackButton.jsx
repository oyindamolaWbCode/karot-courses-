import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack} className="flex items-center text-[1.2vw] text-[#313948] font-inter gap-[0.5vw]">
      <BiArrowBack /> Back
    </button>
  );
};

export default BackButton;
