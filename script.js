function handleSearchSubmit(event){
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-form__input");
    let cityElement = document.querySelector("#weather__city")
   cityElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);