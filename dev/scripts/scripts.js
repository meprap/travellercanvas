$(document).ready(function () {

    // Resize adjustment
    $(window).resize(function () {
        headerAdjustment();
        footerAdjustment();
    });
    headerAdjustment();
    footerAdjustment();

});

// Header Adjustment
function headerAdjustment() {
    var headerHeight = $(".theme-header .navbar").outerHeight(),
        finalHeight = headerHeight + 30;
    $(".theme-main").css("padding-top", "" + finalHeight + "px");
}

// Sticky Footer
function footerAdjustment() {
    var height = $(".theme-footer").outerHeight();
    $(".push").css("height", height);
    $(".theme-main").css("margin-bottom", "-" + height + "px");
}
