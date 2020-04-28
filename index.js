"use strict";

function getDogImage() {
  let numDogs = $("#dogs").val();
  /*if ((numDogs = "")) {
    numDogs == 3;
  }*/
  fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $(".results-img").replaceWith(
    `<img src="${responseJson.message[0]}" class="results-img">`
  );
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    getDogImage();
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
