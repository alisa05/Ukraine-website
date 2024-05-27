var emriError = document.getElementById('emri') ;
var mbiemriError = document.getElementById('mbiemri') ;
var qytetiError = document.getElementById('qyteti')
var emailError = document.getElementById('email') ;

//kontrolli emrit
function validateemri(){
    var emri = document.getElementById('emri').value;

    if(emri.length == 0){
        emriError.innerHTML = 'Vendoseni serish';
        return false;
    }
    if( !emri.match(/^[A-Za-z]*\s{1}}*$/)){
         emriError.innerHTML = 'vendosni emrin' ;
         return false;
    }
    emriError.innerHTML = '<i class="fas fa-check fa-check-circle"></i>' ;
    return true;
}
//kontrolli mbiemrit
function validatembiemri(){
    var mbiemri = document.getElementById('mbiemri').value;

    if(mbiemri.length == 0){
        mbiemriError.innerHTML = 'rivendoseni';
        return false;
    }
    if( !mbiemri.match(/^[A-Za-z]*\s{1}}*$/)){
         mbiemriError.innerHTML = 'vendos mbiemrin' ;
         return false;
    }
    mbiemriError.innerHTML = '<i class="fas fa-check fa-check-circle"></i>' ;
    return true;
}
//kontroll emaili

function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Ploteso serish';
        return false;
    }
    if( !email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
         emailError.innerHTML = 'Rivendos emailin' ;
         return false;
    }
    emailError.innerHTML = '<i class="fas fa-check fa-check-circle"></i>' ;
    return true;
} 
 