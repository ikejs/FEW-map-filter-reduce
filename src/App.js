import React, { Component } from 'react';
import CategoryButton from './CategoryButton.jsx';
import Product from './Product.jsx';
import './bootstrap.min.css';
import './App.css';
import { categoriesAndCount, data } from './Data';

categoriesAndCount.unshift({
  name: "All",
  count: categoriesAndCount.length
});


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCategories: []
    }
  }

  chooseCategory(name) {
    const newSelectedCategories = [...this.state.selectedCategories];
    const index = newSelectedCategories.indexOf(name);
    if (index === -1) {
      newSelectedCategories.push(name);
    } else {
      newSelectedCategories.splice(index, 1);
    }
    this.setState({ selectedCategories: newSelectedCategories });
  }

  render() {
      return (
        <div className="col-md-10 offset-md-2 mt-4">
          <div className="col-md-10 overflow-auto rounded pl-0 pr-0 mb-4">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              {
                categoriesAndCount.map((category, i) => {
                  return <CategoryButton 
                      category={category} 
                      i={i}
                      key={i}
                      checked={
                        this.state.selectedCategories.includes(category.name)
                      } 
                      chooseCategory={
                        (category) => this.chooseCategory(category.name)
                      } 
                    />
                })
              }
            </div>
          </div>
          <div className="row">
            {
              data.map(product => {
                return <Product product={product} />
              })
            }
          </div>
        </div>
    );
  }
  
}

export default App;
