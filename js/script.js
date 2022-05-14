
var elContainer = elFind('.js-container');


function render (array) {
    for (var i = 0; i < array.length; i++){

    // creat elements
      var elDiv = elCreate('div');
      var elCard = elCreate('div');
      var elTitle = elCreate('h4');
      var elYear = elCreate('p');
      var elCategory = elCreate('p');
      var elImg = elCreate('img');
      var elLanguage = elCreate('p');
      var elRate = elCreate('p');
    //   var a = elCreate('a');



    // textcontent
    elTitle.textContent = `Name of movie: ` + array[i].title;
    elYear.textContent = `year: ` + array[i].year;
    elCategory.textContent = `Categories: ` + array[i].categories;
    elImg.src = array[i].smallPoster;
    elImg.alt = 'image';
    elLanguage.textContent = `Language: ` + array[i].language;
    elRate.textContent = array[i].imdbRating;
    // a.href = array[i].trailer;


    //   classname
    elDiv.className = 'wrapper d-flex justify-content-evenly flex-wrap';
    elCard.className = 'card col-10 mx-1 mb-5 text-center';
    elTitle.className = 'card-title text-danger mt-2';
    elContainer.className = 'd-flex flex-wrap';
    elYear.className = 'fs-4 text-primary';
    elCategory.className = 'fs-5 text-primary';
    elLanguage.className = 'fs-6 text-success';
    elRate.className = 'text-danger fa fa-star checked fs-4';


    // append
    elCard.appendChild(elImg);
    elCard.appendChild(elTitle);
    elCard.appendChild(elYear);
    elCard.appendChild(elCategory);
    elCard.appendChild(elLanguage);
    elCard.appendChild(elRate);
    // elCard.appendChild(a);

    elDiv.appendChild(elCard);
    elContainer.appendChild(elDiv);
  }
  }


render(movies);
