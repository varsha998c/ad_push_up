$(document).ready(function () {
    $(".items").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
});
$(document).ready(function () {
    $(".list").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
});
// form submission
document
    .getElementById("demoForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        const firstName = document.getElementById("firstName");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const website = document.getElementById("website");
        const revenue = document.getElementById("revenue");

        clearErrors();

        if (firstName.value.trim() === "") {
            showError("firstNameError");
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            showError("emailError");
            isValid = false;
        }

        if (phone.value.trim() === "" || isNaN(phone.value)) {
            showError("phoneError");
            isValid = false;
        }

        if (website.value.trim() === "" || !validateURL(website.value)) {
            showError("websiteError");
            isValid = false;
        }

        if (revenue.value === "") {
            showError("revenueError");
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
        }
    });

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateURL(url) {
    const re = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)?$/;
    return re.test(url);
}

function showError(elementId) {
    document.getElementById(elementId).style.display = "block";
}

function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => (error.style.display = "none"));
}
