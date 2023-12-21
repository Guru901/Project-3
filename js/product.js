const reviews = document.querySelector('.rbottom');
const showMoreComments = document.querySelector('.show-more');
const showLessComments = document.querySelector('.show-less');


showMoreComments.addEventListener("click", function (){
    reviews.classList.add('r-added');
    showMoreComments.style.display = "none";
    showLessComments.style.display = "block";
});

showLessComments.addEventListener('click', function (){
    reviews.classList.remove('r-added');
    showLessComments.style.display = "none";
    showMoreComments.style.display = "block";
})