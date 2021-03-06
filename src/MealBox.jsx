import React from 'react';
class MealBox extends React.Component {
  constructor(props) {
    super(props);
  }

  incrementCount = (e) => {
    e.preventDefault();
    const meal = {
      name: this.props.name,
      calories: this.props.calories,
      quantity: this.props.quantity + 1
    };
    this.props.addTodaysMeal(meal);
  };
  render() {
    return (
      <div className="media">
        <img
          src={this.props.image}
          className="img-thumbnail mr-3 mw-25 border-0"
          width="150"
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.props.name}</h5>
          <small>{this.props.calories} cal</small>
        </div>
        <form className="row align-self-center">
          <input
            className="form-control col-9"
            type="number"
            value={this.props.quantity}
          />
          <button
            className="btn btn-primary col-3"
            onClick={this.incrementCount}
          >
            +
          </button>
        </form>
      </div>
    );
  }
}

export default MealBox;
