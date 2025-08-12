import { useState } from 'react';

const useForm = <T extends Record<string, unknown>>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange =
    (field: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [field]: e.target.value });
    };
  
  const setData = 
    (data: T) => {
      setValues(data);
    }

  const validate = (
    validators: Record<keyof T, (value: unknown) => string | null>,
  ) => {
    const newErrors: Record<string, string> = {};
    Object.keys(validators).forEach((field) => {
      const error = validators[field as keyof T](values[field as keyof T]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  return { values, errors, handleChange, validate, setData };
};

export default useForm;