const ulCategoriesEl = document.querySelectorAll(".item");
ulCategoriesEl.forEach(category => {
    console.log(category.querySelector('h2').textContent);
    console.log(category.querySelectorAll('li').length);
});