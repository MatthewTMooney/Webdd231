document.addEventListener("DOMContentLoaded", () => {

    const gridBtn = document.getElementById("grid-view");
    const listBtn = document.getElementById("list-view");
    const container = document.getElementById("cardContainer");

    async function loadMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (err) {
            console.error("Error loading member data:", err);
        }
    }

    function displayMembers(members, listView = false) {
        const container = document.getElementById("cardContainer");
        container.innerHTML = "";

        container.classList.toggle("list", listView);
        container.classList.toggle("grid", !listView);

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            container.appendChild(card);
        });
    }

    // View toggle buttons
    document.getElementById("grid-view").addEventListener("click", () => {
        document.getElementById("cardContainer").classList.remove("list");
        document.getElementById("cardContainer").classList.add("grid");
    });

    document.getElementById("list-view").addEventListener("click", () => {
        document.getElementById("cardContainer").classList.remove("grid");
        document.getElementById("cardContainer").classList.add("list");
    });



    gridBtn.addEventListener("click", () => container.classList.add("grid"));
    listBtn.addEventListener("click", () => container.classList.remove("grid"));

    loadMembers();

});