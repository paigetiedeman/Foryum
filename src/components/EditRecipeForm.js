import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditRecipeForm (props) {
  const { recipe } = props;

  function handleEditRecipeFormSubmission(event) {
    event.preventDefault();
    props.onEditRecipe({
      title: event.target.title.value, 
      time: event.target.time.value, 
      description: event.target.description.value, 
      id: recipe.id,
      timeOpen: recipe.timeOpen,
      formattedWaitTime: recipe.formattedWaitTime
    });
  }


  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditRecipeFormSubmission}
        buttonText="Update Recipe" />
    </React.Fragment>
  );
}

EditRecipeForm.propTypes = {
  recipe: PropTypes.object,
  onEditRecipe: PropTypes.func
};

export default EditRecipeForm;