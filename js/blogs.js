const Blogs = document.querySelector("#blogs");

const showMoreBlogs = document.querySelector("#show-more");
const showLessBlogs = document.querySelector("#show-less");
const scrollValueBtm = document.body.scrollHeight - 1000;
const scrollValueTop = 3980 - document.body.scrollHeight;

showMoreBlogs.addEventListener("click", function () {
    Blogs.classList.add("more-blogs");
    showMoreBlogs.style.display = "none";
    showLessBlogs.style.display = "block";
    window.scrollTo(0, scrollValueBtm);
});

showLessBlogs.addEventListener("click", function () {
    Blogs.classList.remove("more-blogs");
    showLessBlogs.style.display = "none";
    showMoreBlogs.style.display = "block";
    window.scrollTo(0, scrollValueTop);
});
