
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
}

const courses = [
    { name: "Web Design I", category: "WDD", completed: true, credits: 3 },
    { name: "Web Design II", category: "WDD", completed: true, credits: 3 },
    { name: "JavaScript Basics", category: "CSE", completed: false, credits: 3 },
    { name: "Responsive Web", category: "WDD", completed: false, credits: 3 },
    { name: "HTML & CSS", category: "CSE", completed: true, credits: 3 },
];


const courseContainer = document.getElementById("course-cards");
const totalCreditsDiv = document.createElement("div");
totalCreditsDiv.id = "credits";
document.getElementById("courses").appendChild(totalCreditsDiv);


function renderCourses(filter = "All") {
    courseContainer.innerHTML = "";

    const filteredCourses = courses.filter(course => {
        if (filter === "All") return true;
        return course.category === filter;
    });

    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";
        if (course.completed) {
            card.style.backgroundColor = "#B22222";
            card.style.color = "white";
        }
        card.innerHTML = `
      <strong>${course.name}</strong> (${course.category}) 
      ${course.completed ? " - Completed" : ""}
    `;
        courseContainer.appendChild(card);
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsDiv.textContent = `Total Credits: ${totalCredits}`;
}


const filtersDiv = document.createElement("div");
filtersDiv.className = "course-filters";

["All", "WDD", "CSE"].forEach(category => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.addEventListener("click", () => renderCourses(category));
    filtersDiv.appendChild(btn);
});

document.getElementById("courses").prepend(filtersDiv);


renderCourses();