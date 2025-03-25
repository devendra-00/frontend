$(document).ready(function() {
    $('#toggle-sidebar').click(function() {
        var sidebar = $('#sidebar');
        if (sidebar.width() > 0) {
            sidebar.css('width', '0');
        } else {
            sidebar.css('width', '250px');
        }
    });

    // Logout confirmation
    $('#logout').click(function() {
        if (confirm('Are you sure you want to log out?')) {
            // Perform logout action
            alert('Logged out successfully!');
        }
    });

    // Fetch user info
    function fetchUserInfo() {
        $.get('/api/user', function(data) {
            if (data) {
                $('#user-info').html(`
                    <div class="row">
                        <div class="col-md-2">
                            <img src="../images/profile-placeholder.png" id="profile-pic" class="img-fluid rounded-circle" 
                                style="width: 50px; height: 50px; cursor: pointer;" 
                                alt="User Profile">
                        </div>
                        <div class="col-md-6">
                            <h5>Name: <span id="user-name">${data.name}</span></h5>
                            <h5>Date of Birth: <span id="user-dob">${data.dob}</span></h5>
                            <h5>Phone: <span id="user-phone">${data.phone}</span></h5>
                            <h5>Email: <span id="user-email">${data.email}</span></h5>
                        </div>
                    </div>
                `);
            } else {
                $('#user-info').html('<div class="text-center">NO user info available</div>');
            }
        });
    }

    // Show modal for adding/editing user info
    $('#edit-user').click(function() {
        $('#userModal').modal('show');
    });

    // Handle form submission for adding/editing user info
    $('#user-form').submit(function(event) {
        event.preventDefault();
        var userInfo = {
            name: $('#name').val(),
            dob: $('#dob').val(),
            phone: $('#phone').val(),
            email: $('#email').val()
        };
        $.post('/api/user', userInfo, function() {
            $('#userModal').modal('hide');
            fetchUserInfo();
        });
    });

    // Initial fetch of user info
    fetchUserInfo();
});

