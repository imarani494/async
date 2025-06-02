const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

function getSortedCategoriesByCount(categories) {
  const counts = countCategories(categories); 

  const sortedCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]) 
    .map(entry => entry[0]);     

  return sortedCategories;
}

const categoryCounts = countCategories(categories);
console.log(categoryCounts); 


const sortedCategoryNames = getSortedCategoriesByCount(categories);
console.log(sortedCategoryNames); 

