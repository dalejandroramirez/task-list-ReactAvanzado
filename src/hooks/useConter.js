import { useState } from 'react';

const useConter = () => {
  const [value, setValue] = useState(0);

  // incrementar
  const increment = (maxValue = 6) => {
    if (value < maxValue) {
      setValue(value + 1);
    } else {
      setValue(maxValue);
    }
  };
  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
  };
  const reset = (initialValue) => {
    setValue(initialValue);
  };

  const incrementStep = (step) => {
    setValue(value + step);
  };

  return {
    value, setValue, increment, decrement, incrementStep, reset,
  };
};

export default useConter;
