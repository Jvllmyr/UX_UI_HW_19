
// Only trigger these js events while > 600 px max width
const mediaQueryMinWidth = window.matchMedia('(min-width: 601px)');

// MM events
$(".mmInfo").on("mouseenter", function () {
    if (mediaQueryMinWidth.matches === true) {
        $(".mmDescription").removeClass("hidden").addClass("active");
    }
})

$(".mmInfo").on("mouseleave", function () {
    if (mediaQueryMinWidth.matches === true) {
        $(".mmDescription").removeClass("active").addClass("hidden");
    }
})

// CCA events
$(".ccaInfo").on("mouseenter", function () {
    if (mediaQueryMinWidth.matches === true) {
        $(".ccaDescription").removeClass("hidden").addClass("active");
    }
})

$(".ccaInfo").on("mouseleave", function () {
    if (mediaQueryMinWidth.matches === true) {
        $(".ccaDescription").removeClass("active").addClass("hidden");
    }
})

// CCS events
$(".ccsInfo").on("mouseenter", function () {
    if (mediaQueryMinWidth.matches === true) {
        $(".ccsDescription").removeClass("hidden").addClass("active");
    }
})

$(".ccsInfo").on("mouseleave", function () {
    if (mediaQueryMinWidth.matches === true) {
        $(".ccsDescription").removeClass("active").addClass("hidden");
    }
})

// Media Query Functions to always show project descriptions while <= 600px max width
const mediaQueryMaxWidth = window.matchMedia('(max-width: 600px)');

function checkMediaQueryMaxWidth(e) {
    // Check if the media query is true
    if (e.matches) {

        $(".mmDescription").removeClass("hidden").addClass("active");
        $(".ccaDescription").removeClass("hidden").addClass("active");
        $(".ccsDescription").removeClass("hidden").addClass("active");
    }
    else {
        $(".mmDescription").addClass("hidden").removeClass("active");
        $(".ccsDescription").addClass("hidden").removeClass("active");
        $(".ccaDescription").addClass("hidden").removeClass("active");
    }
}

// Register event listener
mediaQueryMaxWidth.addListener(checkMediaQueryMaxWidth)

// Initial check
checkMediaQueryMaxWidth(mediaQueryMaxWidth)