
//nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
//img-gallery


document.getElementById("search").addEventListener("click", () => {
    const searchTerm = document.getElementById("searchBox").value;
    console.log(searchTerm);
  
    fetch(
      `https://api.unsplash.com/search/photos?client_id=PLoIRtzsZ7KTJ-Aqw6wh90888DEDRMy8isN186a7xzE&query=${searchTerm}`
    )
    
      .then(response => response.json())
      .then(data => {
        let imagesMarkup = "";
  
        data.results.map(searchResults => {
          return (imagesMarkup += `<img class="searchImg" src="${searchResults.urls.small}">`);
        });
  
        document.getElementById("images").innerHTML = imagesMarkup;
      });
  });
  //Contact Form
  $(function() {
   
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});
//Canvas
