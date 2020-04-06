// let addToy = false;

// document.addEventListener("DOMContentLoaded", () => {
//   const addBtn = document.querySelector("#new-toy-btn");
//   const toyForm = document.querySelector(".container");
//   addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyForm.style.display = "block";
//     } else {
//       toyForm.style.display = "none";
//     }
//   });
// });

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });

  let listObj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

  fetch("http://localhost:3000/toys", listObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      json.forEach(toyCard => {
        cardToyCollectionContainer = document.createElement('div');
          cardToyCollectionContainer.setAttribute('class', 'card');
        cardToyCollectionHeader = document.createElement('h2');
          cardToyCollectionHeader.innerText = toyCard.name;
        cardToyCollectionImage = document.createElement('img');
          cardToyCollectionImage.src = toyCard.image;
          cardToyCollectionImage.setAttribute('class', 'toy-avatar');
        cardToyCollectionLikes = document.createElement('p');
          cardToyCollectionLikes.innerText = toyCard.likes;
        cardToyCollectionButton = document.createElement('button');
          cardToyCollectionButton.innerText = "Like";
          cardToyCollectionButton.setAttribute('class', 'like-btn');
        cardToyCollectionContainer.appendChild(cardToyCollectionHeader);
        cardToyCollectionContainer.appendChild(cardToyCollectionImage);
        cardToyCollectionContainer.appendChild(cardToyCollectionLikes);
        cardToyCollectionContainer.appendChild(cardToyCollectionButton);
        document.body.appendChild(cardToyCollectionContainer);
        })
    })
    .catch(function(error) {
      alert("Sorry something went wrong!");
      console.log(error.message);
    });
});