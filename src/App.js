import React, { Component } from 'react';
import './App.css';
import * as readableAPI from './readableAPI.js'



class App extends Component {

componentDidMount() {
  readableAPI.getCategories().then(category => {
    if (category) {
        category.categories.map(value => console.log(value.name))
    }
  })
}

  render() {
    return (
      <div>
      <div className="App">
        Categories
      </div>

      <div className="content-main">
      <button className="content">
        React
      </button>

      <button className="content">
        Redux
      </button>

      <button className="content">
        Udacity
      </button>
      </div>

      </div>
    );
  }
}

export default App;
