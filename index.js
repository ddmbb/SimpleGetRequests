"use strict";

function getDogImage() {
  let numDogs = $("#dogs").val();
  if (numDogs === "") {
    numDogs = 3;
  }
  fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson));
}

function displayResults(responseJson) {
  let acc = "";
  for (let i = 0; i < responseJson.message.length; i++) {
    acc += `<img src="${responseJson.message[i]}" class="results-img">`;
  }
  console.log(responseJson);
  $(".results-img").html(acc);
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    $(".results-img").html("");
    getDogImage();
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
