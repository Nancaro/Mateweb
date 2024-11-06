const slider = document.querySelector(".testimonial-slider");
const testimonials = document.querySelectorAll(".testimonial");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function updateSlider() {
    const offset = -(currentIndex * (testimonials[0].offsetWidth + 30)); // Incluye el margen derecho
    slider.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSlider();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlider();
});

// Actualizar el tamaño del slider cuando la ventana cambie de tamaño
window.addEventListener("resize", updateSlider);

// Automático: cambia de testimonio cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlider();
}, 3000);