import React from 'react'
import Reg from './Reg';

const validationreg = (values) => {
  let errors={};


  if(!values.name){
    errors.name="Name is required";
  }

  if(!values.email){
    errors.email="Email is required";
  }



  if(!values.contact)  {
    errors.contact="Please enter mobile number";
}  


  if(!values.password)
  {
    errors.password="Password is required";
  }
  return errors;
}

export default validationreg
