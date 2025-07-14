import toast from 'react-hot-toast';
function sendToast(success = true) {
    if (success) {
        toast.success("Your message has been sent successfully!", {
            position: "top-right",
            duration: 3000,
            style: {
                background: "#4caf50",
                color: "#fff",
                fontSize: "16px",
                padding: "10px 20px",
            },
        });
    } else {
        console.error("Error sending toast:");
        toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            duration: 3000,
            style: {
                background: "#f16359ff",
                color: "#fff",
                fontSize: "16px",
                padding: "10px 20px",
            },
        });
    }
}

export { sendToast };   