var toggleBtn = document.getElementById('toggle-btn');
var skills = document.getElementById('skills');
toggleBtn.addEventListener('click', function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
