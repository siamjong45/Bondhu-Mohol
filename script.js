document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("message").innerText = "আপনার রেজিষ্ট্রেশন সম্পন্ন হলো";
        
        // নতুন টেক্সট যোগ করা হবে
        let thankYouMessage = document.createElement("h3");
        thankYouMessage.innerText = "ধন্যবাদ!";
        thankYouMessage.style.color = "#28a745"; // সবুজ রঙের ধন্যবাদ বার্তা
        document.querySelector(".container").appendChild(thankYouMessage);
    }, 10000); // ১০ সেকেন্ড পর পরিবর্তন হবে
});
