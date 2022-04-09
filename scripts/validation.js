function validatePhone()
{
    var phoneNumber = document.getElementById('phone_field').value;
    var phoneRGEX = /^\+?\d.\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}?$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    if(phoneResult === false)
        document.getElementById('phone_field').value = "";
    // alert("phone:"+phoneResult );
}