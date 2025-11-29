import { places } from "../data/places.mjs";

function setFooterDates() {
    const yearSpan = document.getElementById("year");
    const modifiedSpan = document.getElementById("lastModified");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
}

function buildCards() {
    const container = document.getElementById("discover-grid");
    if (!container) return;
    places.forEach((place) => {
        const card = document.createElement("article");
        card.className = "discover-card";
        const title = document.createElement("h2");
        title.textContent = place.name;
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = place.image;
        img.alt = place.alt || place.name;
        figure.appendChild(img);
        const addr = document.createElement("address");
        addr.textContent = place.address;
        const desc = document.createElement("p");
        desc.textContent = place.description;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = "Learn more";
        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(addr);
        card.appendChild(desc);
        card.appendChild(btn);
        container.appendChild(card);
    });
}

function setVisitMessage() {
    const msgEl = document.getElementById("visitMessage");
    if (!msgEl) return;
    const storageKey = "discoverLastVisit";
    const now = Date.now();
    const last = localStorage.getItem(storageKey);
    if (!last) {
        msgEl.textContent = "Welcome! Let us know if you have any questions.";
        localStorage.setItem(storageKey, String(now));
        return;
    }
    const diffMs = now - Number(last);
    const msPerDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(diffMs / msPerDay);
    if (days < 1) {
        msgEl.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        msgEl.textContent = "You last visited 1 day ago.";
    } else {
        msgEl.textContent = "You last visited " + days + " days ago.";
    }
    localStorage.setItem(storageKey, String(now));
}

document.addEventListener("DOMContentLoaded", () => {
    setFooterDates();
    buildCards();
    setVisitMessage();
});
