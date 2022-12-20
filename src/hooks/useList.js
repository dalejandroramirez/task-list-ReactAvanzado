import { useState } from 'react';
import { render } from 'react-dom';

/**
 * 
 * @param {anyArray} initialValue  
 * @returns Un Hook personalizado para crear una lista
 */

const useList = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);


  
/**
 * Push new value to list
 * @param {string} element 
 */
  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  /**
   * Remove Value from list en la posicion index
   * @param {number} index 
   */
  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };


  /** 
   * List is Empty ? true/ false
   * @returns {boolean} true if is empty 
   */
  const isEmpty = () => value.length === 0;

  /**
   * 
   * @returns {number} length of list
   */

  const lenList = () => value.length;

  /**
   * Reset of list
   */

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
