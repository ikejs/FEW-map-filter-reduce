import React from 'react';

function CategoryButton(props) {

  const { checked, i, chooseCategory, category } = props;


  return(
    <label
      className={checked ? "btn btn-secondary active" : "btn btn-secondary"}
      >
      <input type="checkbox"
        checked={checked ? "checked" : ""}
        key={i}
        name="categoryButton"
        autoComplete="off"
        onClick={ () => {
            chooseCategory(category);
          }
        }
      />
      {category.name}
      <span className="badge badge-light">
        {category.count}
      </span>
    </label>
  )
}

export default CategoryButton;