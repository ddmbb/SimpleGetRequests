'use strict';

const numDogs = $('#dogs').val();

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/numDogs')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});