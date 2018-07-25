$(document).ready(function () {

    var quantitiy = 0;
    $('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        $('#quantity').val(quantity + 1);
    });

    $('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });

    $(".btn--add-new").click(function(){
        $("#registration-form").toggle();
    });

    $('.btn--add-new').on('click',function(){
        $('#address-book').toggleClass('hide');
        $('#address-book').addClass('animated fadeOutLeft');
		$('#registration-form').toggleClass('show'); 
	});

    // Resize adjustment
    $(window).resize(function () {
        headerAdjustment();
        footerAdjustment();
    });
    headerAdjustment();
    footerAdjustment();

});

// Wait for the DOM to be ready
$(function () {
    $("form[name='registration']").validate({
        rules: {
            fullname: "required",
            address: "required",
            city: "required",
            country: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        // Specify validation error messages
        messages: {
            fullname: "Please enter your Full Name",
            address: "Perfect Address Plzzzzz!!!",
            city: "Don't you have City???",
            country: "Country Plzzzzzzz...",
            phone: "Phone Number too....Ha Ha",
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
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
