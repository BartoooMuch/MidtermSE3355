document.addEventListener("DOMContentLoaded", function () {
    const courseSelect = document.getElementById("course");
    const citySelect = document.getElementById("city");

    
    const courseApiUrl = "https://run.mocky.io/v3/2bf8dd31-152f-45f7-b32c-ce791d2ea89e"; 
    const cityApiUrl = "https://run.mocky.io/v3/df9b491e-f9be-4c33-bf7f-fdeace46ce2e"; 

    fetch(courseApiUrl)
        .then(response => response.json())
        .then(data => {
            data.courses.forEach(course => {
                const option = document.createElement("option");
                option.value = course;
                option.textContent = course;
                courseSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error fetching courses:", error);
            alert("Unable to load course options. Please try again later.");
        });

    fetch(cityApiUrl)
        .then(response => response.json())
        .then(data => {
            data.cities.forEach(city => {
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error fetching cities:", error);
            alert("Unable to load city options. Please try again later.");
        });
});

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;
    const city = document.getElementById("city").value;
    const contactMethod = document.getElementById("contact-method").value;
    const hours = document.getElementById("hours").value;
    const terms = document.getElementById("terms").checked;

    if (!title || !name || !email || !phone || !course || !city || !contactMethod || !hours || !terms) {
        alert("All fields are required.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const phoneRegex = /^\+905\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid Turkish phone number.");
        return;
    }

    alert("Form submitted successfully!");
    window.location.href = "thank-you.html";
});

document.querySelector(".close-ad").addEventListener("click", function () {
    document.querySelector(".ad-section").style.display = "none"; 
});