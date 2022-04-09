function fullGamerInfo(){
    var first_name = document.querySelector('#first_name_field').value;
    var last_name = document.querySelector('#last_name_field').value;
    var instagram = document.querySelector('#instagram_field').value;
    var email = document.querySelector('#email_field').value;
    var emailTail = document.querySelector('#emailTail_field').value;
    var phone = document.querySelector('#phone_field').value;
    var country = document.querySelector('#country_field').value;
    var gender = document.getElementsByName('gender');

    if(first_name !== "" && last_name !== "" && instagram !== "" && email !== "" && phone !== "" ){
        document.querySelector('#floatingTextarea').textContent = "First name: " + first_name+ "\nLast name: " + last_name + "\nInstagram: @" + instagram + "\nEmail: " + email + "@" + emailTail + "\nPhone: " + phone + "\nCountry: " + country;
        for(i = 0; i < gender.length; i++) {
            if(gender[i].checked)
                document.querySelector('#floatingTextarea').textContent += "\nGender: " + gender[i].value;
        }
    }
}