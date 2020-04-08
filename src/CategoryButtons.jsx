import React from 'react';
import Data, { categories, uniqueCategories, categoriesAndCount } from './Data';

function CategoryButtons() {
  return (
    <div>
      <div className="btn-group btn-group-toggle col-md-6 offset-md-3 overflow-auto" data-toggle="buttons">
        {categoriesAndCount.map((category, i) => {
          return (
            <label className="btn btn-secondary" key={i}>
              <input type="radio" name="categoryButton" id={i} autoComplete="off" />
                {category.name} <span class="badge badge-light">{category.count}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryButtons;