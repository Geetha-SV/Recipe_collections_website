function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var ingredients = document.getElementById('Ingredient').value;
    var instructions = document.getElementById('instructions').value;

    // Store the form data (you can use localStorage or send it to a server)
    localStorage.setItem('recipeName', name);
    localStorage.setItem('recipeIngredients', ingredients);
    localStorage.setItem('recipeInstructions', instructions);

    // Redirect to the next page
    window.location.href = 'next_page.html';
}