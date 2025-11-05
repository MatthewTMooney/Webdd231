
const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");
menuBtn.addEventListener("click", () => {
    navList.classList.toggle("show");
});


document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Courses
const courses = [
    { code: "WDD130", name: "Web Fundamentals", credits: 2, subject: "WDD", completed: true },
    { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 2, subject: "WDD", completed: true },
    { code: "WDD231", name: "Frontend Development I", credits: 2, subject: "WDD", completed: false },
    { code: "CSE110", name: "Programming Basics", credits: 2, subject: "CSE", completed: true },
    { code: "CSE111", name: "Programming w/ Functions", credits: 2, subject: "CSE", completed: false }
];

const container = document.getElementById("courseContainer");
const totalDisplay = document.getElementById("creditTotal");

function displayCourses(list) {
    container.innerHTML = "";
    list.forEach(c => {
        const div = document.createElement("div");
        div.className = "course-card" + (c.completed ? " completed" : "");
        div.textContent = `${c.code} — ${c.name} (${c.credits} cr)`;
        container.appendChild(div);
    });
    const total = list.filter(c => c.completed).reduce((sum, c) => sum + c.credits, 0);
    totalDisplay.textContent = total;
}

document.getElementById("allBtn").addEventListener("click", () => displayCourses(courses));
document.getElementById("wddBtn").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "WDD")));
document.getElementById("cseBtn").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "CSE")));

displayCourses(courses);
