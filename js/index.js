
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