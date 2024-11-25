const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

const movieSelect = document.getElementById("movie");
let ticketPrice = parseInt(movieSelect.value);

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  console.log(selectedSeats);

  const selectedSeatCount = selectedSeats.length;
  count.innerText = selectedSeatCount;
  console.log(selectedSeatCount);
  const totalPrice = ticketPrice * selectedSeatCount;
  total.innerText = totalPrice;
  console.log(totalPrice);
}

movieSelect.addEventListener("change", (event) => {
  ticketPrice = parseInt(event.target.value);
  updateSelectedCount();
});

container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
