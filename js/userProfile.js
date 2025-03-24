$(document).ready(function() {
    $('#toggle-sidebar').click(function() {
        var sidebar = $('#sidebar');
        if (sidebar.is(':hidden')) {
            sidebar.removeClass('d-none').slideDown(500);
        } else {
            sidebar.slideUp(300, function() {
                sidebar.addClass('d-none');
            });
        }
    });
});
