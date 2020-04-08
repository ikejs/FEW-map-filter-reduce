import data from './data.json';

// const categories = data.map((product) => product.category);

// const productCount = data.filter()

const categories = data.reduce((acc, product) => {
  if (acc[product.category]) {
    acc[product.category] += 1
  } else {
    acc[product.category] = 1
  }
  return acc;
}, {});

const uniqueCategories = Object.keys(categories).sort();

const categoriesAndCount = uniqueCategories.map((category) => {
  return {
    name: category,
    count: categories[category]
  }
});

export default data;
export { categories, uniqueCategories, categoriesAndCount };