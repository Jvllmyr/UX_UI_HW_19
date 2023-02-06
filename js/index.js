
// MM events
$(".mmInfo").on("mouseenter", function() {
    $(".mmDescription").removeClass("hidden").addClass("active");
})

$(".mmInfo").on("mouseleave", function() {
    $(".mmDescription").removeClass("active").addClass("hidden");
})

// CCA events
$(".ccaInfo").on("mouseenter", function() {
    $(".ccaDescription").removeClass("hidden").addClass("active");
})

$(".ccaInfo").on("mouseleave", function() {
    $(".ccaDescription").removeClass("active").addClass("hidden");
})

// CCS events
$(".ccsInfo").on("mouseenter", function() {
    $(".ccsDescription").removeClass("hidden").addClass("active");
})

$(".ccsInfo").on("mouseleave", function() {
    $(".ccsDescription").removeClass("active").addClass("hidden");
})

// Media Query Functions
const mediaQuery = window.matchMedia('(max-width: 600px)')

function checkMediaQuery(e) {
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
mediaQuery.addListener(checkMediaQuery)

// Initial check
checkMediaQuery(mediaQuery)