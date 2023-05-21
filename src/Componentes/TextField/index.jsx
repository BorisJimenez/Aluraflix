import React from 'react';

const TextField = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

const Form = () => {
  const formFields = [
    { label: 'Nombre', value: '', onChange: (e) => console.log(e.target.value) },
    { label: 'Correo electrónico', value: '', onChange: (e) => console.log(e.target.value) },
    // Agrega más campos aquí según tus necesidades
  ];

  return (
    <form>
      {formFields.map((field, index) => (
        <TextField
          key={index}
          label={field.label}
          value={field.value}
          onChange={field.onChange}
        />
      ))}
    </form>
  );
};

export default Form;
