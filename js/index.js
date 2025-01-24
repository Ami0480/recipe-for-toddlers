function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.1,
    cursor: "",
  });
}

function showRecipe(event) {
  event.preventDefault();

  let searchForm = document.querySelector("#search-form-user");
  let apiKey = "25ba4b8ct7fc123o0c3d6fccfc118bbd";
  let prompt = `Provide a simple recipe about ${searchForm}`;
  let context = `You are smart expert of todder's recipes. Provide only 1 specific recipe about ${searchForm} and title is with <strong> element. Separate ingredients and instructions with <br /> and make sure separate each sentenses with <br />.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayRecipe);

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML =
    "<div class=blink>⏳ Searching your recipe...</div>";
}

let searchRecipeElement = document.querySelector("#search");
searchRecipeElement.addEventListener("submit", showRecipe);
