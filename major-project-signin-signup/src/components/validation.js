import React from 'react'

const validation = (values) => {
  let errors={};

  if(!values.email){
    errors.email="Email is required";
  }

  if(!values.password)
  {
    errors.password="Password is required";
  }
  return errors;
}

export default validation
