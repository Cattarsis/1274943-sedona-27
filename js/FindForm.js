var butonHotelSearch = document.querySelector(".hotel-search-header");

var form = document.querySelector(".wrapper-search-form");

form.classList.add("hotel-search-hidden");

butonHotelSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.width = form.width;
  form.classList.toggle("hotel-search-show");

});


