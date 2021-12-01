import * as c from './ActionTypes';

export const deleteRecipe = (id) => ({
  type: c.DELETE_RECIPE,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addRecipe = (recipe) => {
  const {title, time, description, id, upvoteCount, downvoteCount, timeOpen, formattedWaitTime } = recipe;
  return {
    type: c.ADD_RECIPE,
    title: title,
    time: time,
    description : description,
    id : id,
    upvoteCount: upvoteCount,
    downvoteCount: downvoteCount,
    formattedWaitTime,
    timeOpen : timeOpen
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});

export const upVote = (id) => ({
  type: c.UPVOTE,
  id
});

export const downVote = (id) => ({
  type: c.DOWNVOTE,
  id
});