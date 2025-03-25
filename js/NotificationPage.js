const notifications = [
    { id: 1, title: "Notification 1", type: "Update", time: "2023-03-25 11:00 AM",  content: "This is the content of notification 1", read: false },
    { id: 2, title: "Notification 2", type: "Upcoming", time: "2023-03-25 11:00 AM", content: "This is the content of notification 2", read: true },
    { id: 3, title: "Notification 3", type: "Update", time: "2023-03-25 11:00 AM",content: "This is the content of notification 3", read: false },
    { id: 4, title: "Notification 4", type: "Update", time: "2023-03-25 11:00 AM", content: "This is the content of notification 4", read: true },
    { id: 5, title: "Notification 5", type: "Upcoming", time: "2023-03-25 11:00 AM", content: "This is the content of notification 5", read: false },
    { id: 6, title: "Notification 6", type: "Upcoming",time: "2023-03-25 11:00 AM", content: "This is the content of notification 6", read: true },
    { id: 7, title: "Notification 7", type: "Upcoming", time: "2023-03-25 11:00 AM", content: "This is the content of notification 7", read: false },
    { id: 8, title: "Notification 8", type: "Upcoming", time: "2023-03-25 11:00 AM", content: "This is the content of notification 8", read: true },
    { id: 9, title: "Notification 9", type: "Upcoming", time: "2023-03-25 11:00 AM", content: "This is the content of notification 9", read: false },
    { id: 10, title: "Notification 10", type: "Update", time: "2023-03-25 11:00 AM", content: "This is the content of notification 10", read: true }
];

function renderNotifications() {
    const notificationsList = $('#notificatios');
    notificationsList.empty();
    notifications.forEach(notification => {
        const cardClass = notification.read 
                                    ? 'read' 
                                    : 'unread';
        const removeButton = notification.read 
                                     ?'<div class="cross-btn-box bg-black"><button class="btn btn-sm remove-btn">&times;</button></div>' 
                                     : '<div class="cross-btn-box bg-black"><span></span></div>';
        const typeClass = notification.type === "Update" 
                                    ? "type-update" 
                                    : "type-upcoming";
        const card = $(`
            <div class="list-group-item notification-card ${cardClass} d-flex justify-content-front align-items-center" data-id="${notification.id}">
                ${removeButton}
                <div class="d-flex flex-column align-items-center">
                    <span class="type-box ${typeClass}">${notification.type}</span>
                    <span>${notification.title}</span>
                </div>
                <span class="notification-time ml-auto">${notification.time}</span>
            </div>
            <div class="notification-content bg-light border shadow-sm">${notification.content}</div>
        `);
        notificationsList.append(card);
    });
}
function renderNotifications() {
    const notificationsList = $('#notifications-list');
    notificationsList.empty();
    notifications.forEach(notification => {
        const cardClass = notification.read ? 'read' : 'unread';
        const removeButton = notification.read 
            ? '<div class="col-2 btn-box bg-success">aada</div>' 
            : '<div class="col-2 btn-box bg-success">dadad</div>';
        const typeClass = notification.type === "Update" ? "type-update" : "type-upcoming";
        const card = $(`
            <div class="list-group-item notification-card ${cardClass} d-flex flex-wrap" data-id="${notification.id}">
                ${removeButton}
                <div class="col bg-warning d-flex flex-column">
                    <span class="type-box ${typeClass} fs-5 fs-md-5 fs-lg-5">${notification.type}</span>
                    <span>${notification.title}</span>
                </div>
                <span class="notification-time">${notification.time}</span>
            </div>
        `);
        notificationsList.append(card);
    });
}



$(document).on('click', '.notification-card', function() {
    const card = $(this);
    const content = card.next('.notification-content');
    content.slideToggle();
    if (!card.hasClass('read')) {
        card.removeClass('unread').addClass('read');
        const id = card.data('id');
        const notification = notifications.find(n => n.id === id);
        if (notification) {
            notification.read = true;
        }
        card.find('.remove-placeholder').replaceWith('<div class="cross-btn-box bg-black"><button class="btn btn-sm remove-btn">&times;</button></div>');
    }
});

$(document).on('click', '.remove-btn', function(e) {
    e.stopPropagation();
    const card = $(this).closest('.notification-card');
    const id = card.data('id');
    const index = notifications.findIndex(n => n.id === id);
    if (index !== -1) {
        notifications.splice(index, 1);
        renderNotifications();
    }
});

$(document).ready(function() {
    renderNotifications();
});
