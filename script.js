document.addEventListener('DOMContentLoaded', () => {
    // Function to split text into spans
    function breaktext() {
        var h1 = document.querySelector(".head h1");
        var h1text = h1.textContent;
        var splittedText = h1text.split("");
        var clutter = "";

        splittedText.forEach(function(elem) {
            clutter += `<span>${elem}</span>`;
        });
        h1.innerHTML = clutter;
    }
    breaktext();

    // GSAP animations
    gsap.from("h1 span", {
        y: 50,
        opacity: 0,
        duration: 0.1,
        stagger: 0.1
    });

    var para = document.querySelector(".head p");
    gsap.from(para, {
        y: 50,
        opacity: 0,
        duration: 1
    });

    var bdy = document.querySelector(".main");
    bdy.addEventListener("mousemove", function(dets) {
        gsap.to(".cursor", {
            x: dets.x + 25,
            y: dets.y + 25
        });
    });

    gsap.from(".nav .right a", {
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out"
    });

    gsap.to(".contButton", {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
        paused: true
    }).eventCallback("onStart", function() {
        this.pause();
    });

    // Check if viewport width is below the mobile breakpoint
    const isMobile = window.innerWidth <= 768;

    // ScrollTrigger for the left image and services page
    if (!isMobile) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".about", {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true
            }
        });

        gsap.from(".services", {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".services",
                start: "top 80%",
                end: "bottom 30%",
                scrub: true
            }
        });
    }

    var imglft = document.querySelector(".leftabout img");
    imglft.addEventListener("mousemove", function() {
        gsap.to(imglft, {
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    imglft.addEventListener("mouseleave", function() {
        gsap.to(imglft, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    // Hamburger menu functionality
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.right').classList.toggle('active');
    });
});
