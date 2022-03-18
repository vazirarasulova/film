var elList = document.querySelector(".film__list");

var elSelect = document.querySelector(".js-select");
var films = films;

function filterArray(array, selValue){
  return array.filter(item => item.genres.includes(selValue))
}

elSelect.addEventListener("change", function(){

  func(filterArray(films,elSelect.value))
})

function func(arr){
  elList.innerHTML = ""
  


  for(var film of arr){

    var newItem = document.createElement("li");
    var newImg = document.createElement("img");
    var newSubbox = document.createElement("div")
    var newHeading = document.createElement("h2");
    var newText = document.createElement("p");
    var newTime = document.createElement("time");
    var newSubList = document.createElement("ul");


    newHeading.textContent = film.title;
    newText.textContent = film.overview.split(" ").slice(0 ,10).join(" ") + "...";
    newTime.textContent = dateFormat(film.release_date);
    newSubList.textContent = dateFormat(film.genres);




    newItem.setAttribute("class", "card mb-3 bg-secondary");
    newItem.setAttribute("style", "width: 18rem");
    newImg.setAttribute("src", film.img);
    newImg.setAttribute("height", 280);
    newImg.setAttribute("class", "card-img");
    newSubbox.setAttribute("class", "card-body text-center bg-secondary bg-opacity-10");
    newText.setAttribute("class", "card-title");
    newText.setAttribute("class", "card-text");
    newTime.setAttribute("class", "card-time");
    newSubList.setAttribute("class", "card-list" );



    for(var genre of film.genres){
      var newSubItem = document.createElement("li");
      newSubItem.textContent = genre;
      newSubList.appendChild(newSubItem);
    }

    newItem.setAttribute("class", "card");
    newImg.setAttribute("src", film.poster);
 
    newText.setAttribute("class", "card-text");
    newTime.setAttribute("datetime", "2022-03-12");
    newSubList.setAttribute("class", "card-sublist");


    newItem.appendChild(newImg);
    newItem.appendChild(newSubbox)
    newSubbox.appendChild(newHeading);
    newSubbox.appendChild(newText);
    newSubbox.appendChild(newTime);
    newSubbox.appendChild(newSubList);
    elList.appendChild(newItem);

  }

}
  

func(films)
