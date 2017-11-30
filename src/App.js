import React, { Component } from 'react';
import './App.css';
import * as readableAPI from './readableAPI.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    }
  }

componentDidMount() {
  readableAPI.getCategories().then(category => {
    if (category) {
      const categoryNames = category.categories.map(category => {
        return category.name
        })
        this.setState({ category: categoryNames}, () => {console.log(this.state.category)})
    }
    console.log(this.state.category[2])
  })
}

  render() {
    return (
      <div>
      <div className="App">
        Categories
      </div>

      <div className="content-main">



        {this.state.category.map(category =>
          <button className="content">
            {category}
          </button>
        )}

      </div>

      </div>
    );
  }
}

export default App;
