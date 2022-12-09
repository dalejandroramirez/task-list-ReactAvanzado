import { useState } from 'react';
import { render } from 'react-dom';

const useList = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  // Push new value to list
  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  // Remove VAlue from list
  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  // List is Empty ? true/ false
  const isEmpty = () => value.length === 0;

  const lenList = () => value.length;

  const removeList = () => {
    setValue([]);
  };

  const sortList = (list) => {
    render();
    list.sort();
  };

  const reverseList = (list) => {
    list.reverse();
  };

  return {
    value, setValue, push, remove, isEmpty, lenList, removeList, sortList, reverseList,
    };
};

export default useList;
