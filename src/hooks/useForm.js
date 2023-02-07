import { useState } from 'react';

export const useForm = (initialState = {}, onSubmit) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isCompleteForm = values => {
    return values.every(value => value !== '');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isCompleteForm(Object.values(formData))) {
      onSubmit(formData);
      setFormData(initialState);
    } else {
      alert('All fields are required');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};