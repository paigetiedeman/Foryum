import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { title, time, description, id, upvoteCount, downvoteCount, timeOpen, formattedWaitTime } = action;
  switch (action.type) {
    case c.ADD_RECIPE:
      return Object.assign({}, state, {
        [id]: {
          title: title,
          time: time,
          description : description,
          id : id,
          upvoteCount : upvoteCount,
          downvoteCount : downvoteCount,
          timeOpen : timeOpen,
          formattedWaitTime: formattedWaitTime
        }
      });
    case c.DELETE_RECIPE:
      let newState = { ...state };
      delete newState[id];
      return newState;
    case c.UPVOTE:
      let newState1 = { ...state };
      newState1[id].upvoteCount++;
      return newState1;
    case c.DOWNVOTE:
      let newState2 = { ...state };
      newState2[id].downvoteCount++;
      return newState2;
    case c.UPDATE_TIME:
      const newRecipe = Object.assign({}, state[id], {formattedWaitTime});
      const updatedState = Object.assign({}, state, {
        [id]: newRecipe
      });
      return updatedState;
    default:
      return state;
  }
};