function password_verification() {
    let username = document.getElementById('user').value;
    let password = document.getElementById('pass').value;

    if (username =='sicksiben67' && password =='getwellsoonben') {
        window.alert('Welcome sicksiben67!');
        window.open('notebooks.html', '_blank');
    }
    else {
        window.alert('Invalid username and/or password');
    }
}

function text_appear () {
    const checkbox = document.getElementById('save');

    if (checkbox.checked) {
        document.getElementById('output').innerHTML = 'Your password and user are now saved!';
    }
    else {
        document.getElementById('output').innerHTML = "";
    }
}