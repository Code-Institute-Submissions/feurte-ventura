function sendMail(requestForm) {
    emailjs.send("bubbly16","holiday-request", {
        "from_name": requestForm.name.value,
        "from_phone_num": requestForm.phone-num.value,
        "from_email": requestForm.email.value,
        "holiday_request": requestForm.holidayrequest.value
    })
    .then(
        function(response) {
            console.log("CONGRATULATIONS", response);
        },
        function(error) {
            console.log("OOPS SOMETHING WENT WRONG", error);
        });
    return false;
};