const btn = document.getElementById('btn');

btn.addEventListener('click', togglelight);

function togglelight() {
    var element = document.body;
    element.classList.toggle("light");

    var contain = document.getElementsByClassName("container")[0];
    contain.classList.toggle("light");

    var prof = document.getElementsByClassName("profile")[0];
    prof.classList.toggle("light");
}
