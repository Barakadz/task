// components/Tour.js
import React from 'react';
import Joyride from 'react-joyride';
import useClientOnly from './useClientOnly';
  

const Tour = () => {
  const isClient = useClientOnly();

  const steps = [
    {
      target: '.email-step',
      content: 'Enter your email address here.',
    },
    {
      target: '.password-step',
      content: 'Enter your password here.',
    },
 
  ];

  if (!isClient) return null;

  return (
    <Joyride
      steps={steps}
      continuous={true}
      scrollToFirstStep={true}
      showProgress={true}
      showSkipButton={true}
    />
  );
};

export default Tour;
