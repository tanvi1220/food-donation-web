// script.js - Handles interactions, dummy data, forms, and animations

// Dummy data for listings
const eventData = [
    { name: "Grand Hotel Gala", location: "Moshi", quantity: "100 servings", time: "2 hours left" },
    { name: "Wedding Reception", location: "Aundh Area", quantity: "50 servings", time: "4 hours left" },
    { name: "Corporate Event", location: "Hinjawadi", quantity: "75 servings", time: "1 hour left" }
];

const charityData = [
    { name: "City Food Bank", location: "Karve nagar", contact: "foodbank@city.org" },
    { name: "Green Hostel", location: "Baner", contact: "info@greenhostel.com" },
    { name: "Hope School", location: "chinchwad", contact: "admin@hopeschool.edu" }
];

// Populate event listing
function populateEvents() {
    const list = document.getElementById('event-list');
    eventData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Quantity:</strong> ${item.quantity}</p>
            <p><strong>Time Left:</strong> ${item.time}</p>
            <button class="btn primary" onclick="alert('Contacting ${item.name}...')">Contact</button>
        `;
        list.appendChild(div);
    });
}

// Populate charity listing
function populateCharities() {
    const list = document.getElementById('charity-list');
    charityData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Contact:</strong> ${item.contact}</p>
            <button class="btn primary" onclick="alert('Requesting food from ${item.name}...')">Request Food</button>
        `;
        list.appendChild(div);
    });
}

// Form handlers
document.getElementById('report-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation (HTML required handles most)
    document.getElementById('success-message').style.display = 'block';
    this.reset();
});

document.getElementById('volunteer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('vol-success').style.display = 'block';
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('contact-success').style.display = 'block';
    this.reset();
});

// Simple fade-in animation on scroll
function fadeInOnScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize sections with fade-in
document.addEventListener('DOMContentLoaded', function() {
    populateEvents();
    populateCharities();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s, transform 0.6s';
    });
    fadeInOnScroll();
});

window.addEventListener('scroll', fadeInOnScroll);
