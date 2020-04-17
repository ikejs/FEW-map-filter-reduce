import React, { Component } from 'react';
import CategoryButton from './CategoryButton';
import data from './Data';

class CategoryButtons extends Component {

  chooseCategory(i) {
    if(this.props.categories[i].name === "All") {
      this.setState({ currentItems: data });
    } else {
      alert(this.props.categories[i].name);
    }
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3 overflow-auto rounded pl-0 pr-0">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          {this.props.categories.map((category, i) => {
            return (
              <CategoryButton category={category} i={i} />
            )
          })}
        </div>
      </div>
    )
  }
  
}

export default CategoryButtons;