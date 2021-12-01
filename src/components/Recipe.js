import React from 'react';
import PropTypes from "prop-types";


function Recipe(props){
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <p><em>Time to Cook: {props.time} minutes</em></p>
        <p><button onClick={() => props.onUpVoteClick(props.id) } className="up">Up</button></p>
        <p> Yumms: {props.upvoteCount} </p>
        <p><button onClick={() => props.onDownVoteClick(props.id) } className="down">Down</button></p>
        <p>Yucks : {props.downvoteCount} </p>
        <p><em>{props.formattedWaitTime}</em></p>
        <button onClick = {() => props.whenRecipeClicked(props.id)}>Details</button>
        <hr/>
      </div>
    </>
  )
}

Recipe.propTypes = {
  title: PropTypes.string,
  time: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  upvoteCount: PropTypes.number,
  downvoteCount: PropTypes.number,
  onUpVoteClick: PropTypes.func,
  onDownVoteClick: PropTypes.func,
  whenRecipeClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string
};

export default Recipe;