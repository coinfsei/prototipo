document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".menu-link");
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const menuIcon = document.getElementById("menu-icon");

    // ScrollSpy
    function onScroll() {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    }

    // Toggle menu mobile
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("hidden");
        toggleIcon();
    });

    // Recolher menu ao clicar em um item
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 640) { // sm breakpoint do Tailwind
                menu.classList.add("hidden");
                toggleIcon(true);
            }
        });
    });

    // Alternar ícone hambúrguer ↔ X
    function toggleIcon(forceHamburguer = false) {
        if (forceHamburguer || menu.classList.contains("hidden")) {
            menuIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        `;
        } else {
            menuIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        `;
        }
    }

    window.addEventListener("scroll", onScroll);
});

// Mostrar/ocultar conteúdo da programação
function mostrarDia(dia) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(dia).classList.remove('hidden');
}