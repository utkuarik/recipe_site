// script.js

const recipes = [
    {
      id: 1,
      title: 'Chocolate Chip Cookies',
      ingredients: ['Flour', 'Sugar', 'Butter', 'Chocolate Chips'],
      instructions: '...',
      imageUrl: "https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-master768.jpg",
      rating: 4.5,
      comments: []
    },
    {
      id: 2,
      title: 'Pasta Carbonara',
      ingredients: ['Pasta', 'Eggs', 'Bacon', 'Parmesan Cheese'],
      instructions: '...',
      imageUrl: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg',
      rating: 4.2,
      comments: []
    },
      {
      id: 3,
      title: 'Pasta Carbonara 2',
      ingredients: ['Pasta', 'Eggs', 'Bacon', 'Parmesan Cheese'],
      instructions: '...',
      imageUrl: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg',
      rating: 4.2,
      comments: []
    },
    // Add more recipes...
  ];
  
  window.addEventListener('DOMContentLoaded', () => {
    const featuredRecipesContainer = document.getElementById('featuredRecipes');
    const recipeDetailsContainer = document.getElementById('recipeDetails');
    const searchInput = document.querySelector('nav input[type="text"]');
    const searchButton = document.querySelector('nav button');
  
  // Display featured recipes
    recipes.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.classList.add('recipe');
      recipeElement.innerHTML = `
        <img src="${recipe.imageUrl}" alt="${recipe.title}">
        <div class="recipe-content">
          <h3>${recipe.title}</h3>
          <p>Rating: ${recipe.rating}</p>
        </div>
      `;
      recipeElement.addEventListener('click', () => {
        displayRecipeDetails(recipe);
      });
      featuredRecipesContainer.appendChild(recipeElement);
    });
  
    // Display recipe details
    function displayRecipeDetails(recipe) {
      recipeDetailsContainer.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.imageUrl}" alt="${recipe.title}">
        <h3>Ingredients</h3>
        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h3>Instructions</h3>
        <p>${recipe.instructions}</p>
        <div id="recipeRating">
          <input type="radio" name="rating" value="1"> 1
          <input type="radio" name="rating" value="2"> 2
          <input type="radio" name="rating" value="3"> 3
          <input type="radio" name="rating" value="4"> 4
          <input type="radio" name="rating" value="5"> 5
          <button onclick="submitRating()">Submit Rating</button>
        </div>
        <div class="comments" id="comments">
          <h3>Comments</h3>
          <form onsubmit="submitComment(event)">
            <input type="text" id="commentInput" placeholder="Add a comment">
            <button type="submit">Submit</button>
          </form>
          <div id="commentList">
            ${recipe.comments.map(comment => `<div class="comment">${comment}</div>`).join('')}
          </div>
        </div>
      `;
      recipeDetailsContainer.style.display = 'block';
    }
  
    // Submit rating
    window.submitRating = function () {
      const ratingInputs = document.getElementsByName('rating');
      const selectedRating = Array.from(ratingInputs).find(input => input.checked);
      if (selectedRating) {
        const ratingValue = selectedRating.value;
        // Implement your logic to submit the rating
        console.log(`Submitted rating: ${ratingValue}`);
      } else {
        console.log('No rating selected');
      }
    }
  
    // Submit comment
    window.submitComment = function (event) {
      event.preventDefault();
      const commentInput = document.getElementById('commentInput');
      const comment = commentInput.value.trim();
      if (comment) {
        // Implement your logic to submit the comment
        console.log(`Submitted comment: ${comment}`);
        const commentList = document.getElementById('commentList');
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = comment;
        commentList.appendChild(commentElement);
        commentInput.value = '';
      } else {
        console.log('Comment input is empty');
      }
    }
  
    // Search recipes
    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm) {
        const matchingRecipes = recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(searchTerm)
        );
        displaySearchResults(matchingRecipes);
      } else {
        displaySearchResults(recipes);
      }
      searchInput.value = '';
    });
  
    function displaySearchResults(recipes) {
      featuredRecipesContainer.innerHTML = '';
      recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
          <img src="${recipe.imageUrl}" alt="${recipe.title}">
          <div class="recipe-content">
            <h3>${recipe.title}</h3>
            <p>Rating: ${recipe.rating}</p>
          </div>
        `;
        recipeElement.addEventListener('click', () => {
          displayRecipeDetails(recipe);
        });
        featuredRecipesContainer.appendChild(recipeElement);
      });
    }
  
    // Initialize the featured recipes
    displaySearchResults(recipes);
  });
  
  
  
  