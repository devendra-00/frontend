$(document).ready(function(){
    let profilePic = $('#profile-pic');
    let defaultIcon = $('#default-icon');

    // Check if the profile image exists
    profilePic.on('error', function() {
        $(this).hide(); 
        defaultIcon.show();
    }).on('load', function() {
        defaultIcon.hide(); 
        $(this).show();
    });

    // Open modal on click of image or icon
    $('#profile-pic, #default-icon').click(function(){
        $('#profileModal').modal('show');
    });

    $('#profile-pic').click(function(){
        $('#profileModal').modal('show');
    });
});


