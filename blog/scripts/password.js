function validatePass(){
    if(document.getElementById('password').value == 'plumbus'){
        return true;
    }else{
        alert('Wrong Password, Ya Dingus!');
        return false;
    }
}