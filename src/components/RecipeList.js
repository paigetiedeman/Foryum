import React from 'react';
import PropTypes from "prop-types";
import Recipe from "./Recipe";

function RecipeList(props) {

  return (
    <>
    <hr/>
    {Object.values(props.recipeList).map((recipe) => {
    return <Recipe
      whenRecipeClicked = {props.onRecipeSelection}      
      title= {recipe.title}
      time={recipe.time}
      description= {recipe.description}
      formattedWaitTime={recipe.formattedWaitTime}
      upvoteCount={recipe.upvoteCount}
      downvoteCount={recipe.downvoteCount}
      onUpVoteClick = {props.onUpvote}
      onDownVoteClick = {props.onDownvote}
      id= {recipe.id}
      key={recipe.id} />
    })}
    </>
    );
}

RecipeList.propTypes = {
  recipeList: PropTypes.array,
  onRecipeSelection: PropTypes.func,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
};

export default RecipeList;