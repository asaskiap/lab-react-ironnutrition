import React, { Component } from 'react';
import './App.scss';
import TodaysMeals from './TodaysMeals';
import MealBox from './MealBox';
import meals from './meals.json';
import SearchForm from './SearchForm';
import AddMealForm from './AddMealForm';

class App extends Component {
  state = {
    meals: [...meals],
    searchValue: '',
    todaysMeals: [],
    todaysCalories: 0
  };

  addNewMeal = (meal) => {
    console.log('here');
    console.log(meal);
    this.setState({
      meals: [meal, ...this.state.meals]
    });
  };

  handleSearch = (searchTerm) => {
    const results = this.state.meals.filter((meal) =>
      meal.name.startsWith(searchTerm)
    );
    this.setState({
      searchValue: searchTerm,
      meals: [...results]
    });
  };

  addTodaysMeal = (meal) => {
    if (this.state.todaysMeals.some((food) => food.name === meal.name)) {
      const index = this.state.todaysMeals.findIndex(
        (food) => food.name === meal.name
      );
      let newTodaysMeals = [...this.state.todaysMeals];
      newTodaysMeals[index].quantity++;
      this.setState({
        todaysMeals: [...newTodaysMeals],
        todaysCalories: this.state.todaysCalories + meal.calories
      });
    } else {
      this.setState({
        todaysMeals: [...this.state.todaysMeals, meal],
        todaysCalories: this.state.todaysCalories + meal.calories
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>

        <SearchForm
          onSearch={this.handleSearch}
          searchValue={this.state.searchValue}
        />
        <AddMealForm addNewMeal={this.addNewMeal} />

        <div className="mealOverview">
          <div className="mealList">
            {this.state.meals.map((meal) => {
              return (
                <MealBox
                  id={Math.random().toString()}
                  setQuantity={() => this.setQuantity()}
                  name={meal.name}
                  calories={meal.calories}
                  quantity={meal.quantity}
                  image={meal.image}
                  addTodaysMeal={this.addTodaysMeal}
                />
              );
            })}
          </div>
          <TodaysMeals
            foods={this.state.todaysMeals}
            totalCalories={this.state.todaysCalories}
          />
        </div>
      </div>
    );
  }
}

export default App;
