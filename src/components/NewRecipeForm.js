import React from 'react';
import { v4 } from 'uuid'; 
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import Moment from "moment";

function NewRecipeForm(props){
  
  function handleNewRecipeFormSubmission(event){
    event.preventDefault();
    props.onNewRecipeCreation({
      title: event.target.title.value,
      time: event.target.time.value,
      description: event.target.description.value,
      upvoteCount: 0,
      downvoteCount: 0,
      id: v4(),
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    });
  }


  return (
    <>
      <ReusableForm 
      formSubmissionHandler = {handleNewRecipeFormSubmission}
      buttonText="Add Recipe" />
    </>
  );
}

NewRecipeForm.propTypes = {
  onNewRecipeCreation: PropTypes.func
};

export default NewRecipeForm;