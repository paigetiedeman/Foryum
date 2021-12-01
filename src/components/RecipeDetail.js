import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetail(props){
  const { recipe } = props;

  return (
    <>
      <h2>Recipe Details</h2>
        <h3>{recipe.title}</h3>
        <p><em>Time to Cook:{recipe.time} minutes</em></p>
        <p>{recipe.description}</p>
        <p><em>{recipe.formattedWaitTime}</em></p>
        <p>⬆️{recipe.upvoteCount} ⬇️{recipe.downvoteCount}</p>
        <button onClick= {() => props.onClickingDelete(recipe.id) } className="btn btn-dark">Delete Recipe</button>
        <button onClick= {props.onClickingEdit } className="btn btn-dark">Update Recipe</button>
    </>
  )
}

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  onClickingDelete: PropTypes.func,
  OnClickingEdit: PropTypes.func
}

export default RecipeDetail;