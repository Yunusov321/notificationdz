function showNotification(text, type) {
    var color = "";

    if (type == "success") {
        color = "#4CAF50";
    } else if (type == "fail") {
        color = "#f44336";
    } else if (type == "warning") {
        color = "#ff9800";
    } else {
        color = "#2196F3";
    }

    Toastify({
        text: text,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: color,
        close: true
    }).showToast();
}