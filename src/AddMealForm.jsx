import React from 'react';

class AddMealForm extends React.Component {
  state = {
    displayForm: 'none',
    name: '',
    calories: 0,
    image: ''
  };

  handleFormSubmission = (e) => {
    e.preventDefault();
    const newMeal = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    };
    this.props.addNewMeal(newMeal);
    this.setState({
      name: '',
      calories: 0,
      image: '',
      searchValue: ''
    });
  };

  handleNewInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  displayMealForm = () => {
    this.setState({
      displayForm: 'block'
    });
  };
  hideMealForm = () => {
    this.setState({
      displayForm: 'none'
    });
  };
  render() {
    return (
      <div className="AddMealForm">
        <button
          onClick={this.displayMealForm}
          type="button"
          className="btn btn-primary"
        >
          Add A New Meal
        </button>
        <form
          onSubmit={this.handleFormSubmission}
          style={{ display: this.state.displayForm }}
        >
          <input
            type="text"
            name="name"
            id="meal-name"
            placeholder="Name of the meal..."
            onChange={this.handleNewInput}
            value={this.state.name}
          />
          <input
            type="number"
            name="calories"
            id="meal-calories"
            placeholder="Number of calories..."
            onChange={this.handleNewInput}
            value={this.state.calories}
          />
          <input
            type="url"
            name="image"
            id="meal-image"
            placeholder="Url for an image of your meal..."
            onChange={this.handleNewInput}
            value={this.state.image}
          />
          <button
            onClick={this.hideMealForm}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default AddMealForm;
