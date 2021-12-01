import React from 'react';
import NewRecipeForm from './NewRecipeForm';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import EditRecipeForm from './EditRecipeForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class RecipeControl extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: null,
      editing: false
    };
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() => 
      this.updateRecipeElapsedWaitTime(), 6000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateRecipeElapsedWaitTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.mainRecipeList).forEach(recipe => {
      const newFormattedWaitTime = recipe.timeOpen.fromNow(true);
      const action = a.updateTime(recipe.id, newFormattedWaitTime);
      dispatch(action);
    });
  }

  handleClick = () => {
    if (this.state.selectedRecipe != null) {
      this.setState({
        selectedRecipe: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewRecipeToList = (newRecipe) => {
    const { dispatch } = this.props;
    const action = a.addRecipe(newRecipe);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedRecipe = (id) => {
    const selectedRecipe = this.props.mainRecipeList[id];
    this.setState({selectedRecipe: selectedRecipe})
  }

  handleDeletingRecipe = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteRecipe(id);
    dispatch(action);
    this.setState({selectedRecipe: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingRecipeInList = (recipeToEdit) => {
    const { dispatch } = this.props;
    const action = a.addRecipe(recipeToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedRecipe: null
    });
  }


  handleUpvote = (id) => {
    const { dispatch } = this.props;
    const action = a.upVote(id);
    dispatch(action);
  }

  handleDownvote = (id) => {
    const { dispatch } = this.props;
    const action = a.downVote(id);
    dispatch(action);
    };
  

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditRecipeForm recipe = {this.state.selectedRecipe} onEditRecipe = {this.handleEditingRecipeInList} />
      buttonText = "Return to Recipe Forum";
    } else if (this.state.selectedRecipe != null) {
      currentlyVisibleState =
      <RecipeDetail
        recipe = {this.state.selectedRecipe}
        onClickingDelete = {this.handleDeletingRecipe}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Recipe List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewRecipeForm onNewRecipeCreation={this.handleAddingNewRecipeToList} />;
      buttonText = "Return to Recipe List";
    } else {
      currentlyVisibleState = <RecipeList recipeList = {this.props.mainRecipeList} onRecipeSelection={this.handleChangingSelectedRecipe} onUpvote={this.handleUpvote} onDownvote={this.handleDownvote}/>;
      buttonText = "Add Recipe";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className="btn btn-dark">{buttonText}</button>
      </>
    );
  }
};

RecipeControl.propTypes = {
  mainRecipeList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const sortHappy = (recipeList) => {
  const sortArray = Object.entries(recipeList);
  const arraySorted = sortArray.sort((a,b) => (b[1].upvoteCount - b[1].downvoteCount) - (a[1].upvoteCount - a[1].downvoteCount));
  return Object.fromEntries(arraySorted)
}

const mapStateToProps = (state) => {
  const sortedList = sortHappy(state.mainRecipeList);
  return {
    mainRecipeList: sortedList,
    formVisibleOnPage: state.formVisibleOnPage
  };
};

RecipeControl = connect(mapStateToProps)(RecipeControl);

export default RecipeControl;