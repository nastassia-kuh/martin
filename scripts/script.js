$(document).ready(function () {
    $('.burger').on('click', function() {
        $('.burger').toggleClass('active');
        $('#menu').toggle('slow');
        $('#menu *').each(function (item) {
            $(this).click(function () {
                $('.burger').removeClass('active');
                $('#menu').hide('slow');
            })
        })
    });
})