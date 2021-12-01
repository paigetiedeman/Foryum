import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder='Chicken Doodle Sup' 
          className='form-control'/>
          <br />
        <input
          type='number'
          name='time'
          placeholder='60'  
          className='form-control'/>
          <br />
        <textarea
          name='description'
          placeholder='Describe your ingredients and if there really is such a thing as love, or if it is just nostalgia for a safe time' 
          className='form-control'/>
          <br />
        <button type='submit' className='btn btn-dark'>{props.buttonText}</button>
      </form>
      <br />
    </React.Fragment>
  );
}


ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;