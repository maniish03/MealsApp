const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function showMealDescription(mealName) {
  alert("Description for " + mealName);
}

const preloadedMeals = [
    { id: '1', name: 'Pizza', image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: '2', name: 'Burger', image: 'https://www.themealdb.com/images/media/meals/xxpqsy1511139730.jpg' },
    { id: '3', name: 'Pasta', image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' },
    { id: '4', name: 'Hamburger', image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg' },
    { id: '5', name: 'Cheeseburger', image: 'https://www.themealdb.com/images/media/meals/wrssvt1511785867.jpg' },
    { id: '6', name: 'Sandwich', image: 'https://www.themealdb.com/images/media/meals/vtqxtu1511458003.jpg' },
    { id: '7', name: 'Milk Shake', image: 'https://www.themealdb.com/images/media/meals/ruwpww1511786491.jpg' },
    { id: '8', name: 'Muffin', image: 'https://www.themealdb.com/images/media/meals/4voi6s1596017813.jpg' },
    { id: '9', name: 'Burrito', image: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg' },
    { id: '10', name: 'Biscuit', image: 'https://www.themealdb.com/images/media/meals/b3xvnq1560450521.jpg' },
    { id: '11', name: 'Taco', image: 'https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg' },
    { id: '12', name: 'Hot Dog', image: 'https://www.themealdb.com/images/media/meals/hrrvtr1511297677.jpg' },
    { id: '13', name: 'Fried Chicken', image: 'https://www.themealdb.com/images/media/meals/qpcjsi1610015529.jpg' },
    { id: '14', name: 'Donuts', image: 'https://www.themealdb.com/images/media/meals/4i5cnx1614769840.jpg' },
  ];
  
  // Set a fixed width and height for the images
  const squareSize = 200; // Adjust the size as needed
  
  preloadedMeals.forEach((meal) => {
    meal.image = `${meal.image}/preview`; // Append '/preview' to the image URL to get a square preview version
    meal.image += `/${squareSize}/${squareSize}`; // Add the width and height to make it a square image
  });
  

searchInput.addEventListener('input', debounce(searchMeals, 500));

function searchMeals() {
  const query = searchInput.value.trim();
  if (query.length < 2) {
    searchResults.innerHTML = '';
    return;
  }

  const filteredMeals = preloadedMeals.filter((meal) =>
    meal.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredMeals.length > 0) {
    const mealsHTML = filteredMeals.map((meal) => {
      const highlightClass = meal.name.toLowerCase().startsWith('p') ? 'highlight' : '';
      return `
        <div class="meal ${highlightClass}" onclick="showMealDescription('${meal.name}')">
          <img src="${meal.image}" alt="${meal.name}">
          <h3>${meal.name}</h3>
        </div>
      `;
    });
    searchResults.innerHTML = mealsHTML.join('');
  } else {
    searchResults.innerHTML = '<p>No results found.</p>';
  }
}

// Debounce function to delay API calls while typing
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

