import React from 'react';
import PropTypes from "prop-types";


function Recipe(props){
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <p><em>Time to Cook: {props.time} minutes</em></p>
        
        <div onClick={() => props.onUpVoteClick(props.id) } className="arrowbtn arrowbtn-up"><p> ^</p></div><p className="yumm">Yumms: {props.upvoteCount}</p>
        
        <div><p onClick={() => props.onDownVoteClick(props.id) }className="arrowbtn arrowbtn-down">^</p></div><p className="yumm yuck">Yucks : {props.downvoteCount} </p>

        <p><em>{props.formattedWaitTime}</em></p>
        <button onClick = {() => props.whenRecipeClicked(props.id)} className="btn btn-dark">Details</button>
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