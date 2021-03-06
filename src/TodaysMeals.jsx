import React from 'react';

class TodaysMeals extends React.Component {
  render() {
    return (
      <div className="todaysMeals media">
        <h2>Today's Foods</h2>
        <ul className="foodList">
          {this.props.foods.map((food) => {
            return (
              <li key={Math.random().toString()}>
                {food.quantity} {food.name} : {food.calories}
              </li>
            );
          })}
        </ul>

        <p>Total calories: {this.props.totalCalories}</p>
      </div>
    );
  }
}

export default TodaysMeals;
