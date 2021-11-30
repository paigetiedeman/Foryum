import React from 'react';
import PropTypes from "prop-types";


function Ticket(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenRecipeClicked(props.id)}>
        <h2>{}</h2>
      </div>
      <hr/>
    </React.Fragment>
  )
}

Recipe.propTypes = {
  title: PropTypes.string,
  time: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number
}

export default Recipe;