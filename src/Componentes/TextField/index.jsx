import React from 'react';
import TextField from '@mui/material/TextField';

const CampoTexto = ({ id, label, variant, background, color, type  }) => {
  return (
    <TextField 
      id={id} 
      label={label} 
      variant={variant} 
      background={background} 
      color={color} 
      fullWidth 
      required 
      InputLabelProps={{style: { color: '#f5f5f5'}}}
      InputProps={{sx: { backgroundColor: '#53585D' },
        type: type,
      }}
    />
  );
};

export default CampoTexto;