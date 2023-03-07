// Name and Password from the register-form
var user = document.getElementById('user');
var pw = document.getElementById('pw');

function store() {
    localStorage.setItem('user', user.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('user');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        Swal.fire ({
            position: 'center',
            icon: 'success',
            title: 'Hello'+ " " + userName.value +" "+ 'Your are loged in',
            showConfirmButton: false,
            timer: 9000
          })
    }
}

//function of calculation IBM 
var button=document.getElementById('btn') 
button.addEventListener('click',function(){
    //convert the input value to a number
    var height=parseInt(document.getElementById('height').value)
    var weight=parseInt(document.getElementById('weight').value)
    var result= document.getElementById('output')
    var status_height=false 
    var status_weight=false
    //check for the valid input
    if(height==='' || isNaN(height) || (height<=0)){
        document.getElementById('h_error').innerHTML= 'Please provide a valid height'
    }
    else{
        document.getElementById('h_error').innerHTML=''
        status_height=true
    }
    if (weight ===''|| isNaN(weight) || (weight<=0)){
        document.getElementById('w_error').innerHTML='Please provide a valid weight'
    }
    else {
        document.getElementById('w_error').innerHTML=''
        status_weight=true
    }
    if (status_height && status_weight){
        var bmi=(weight/((height*height)/10000)).toFixed(2)
        if (bmi<18.6){
            result.innerHTML='under weight : '+ bmi + 'you can choose What you want'
            //alert from sweetalert2
            Swal.fire({
                title: 'Under weight!',
                text: 'But you can choose What you want.',
                imageUrl: 'pictures/food-back.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }
        //alert from sweetalert2
        else if (bmi>=18.6 && bmi <24.9){
            result.innerHTML='Normal : '+ bmi +'you can choose What you want'
            Swal.fire({
                title: 'Normal!',
                text: 'you can choose What you want.',
                imageUrl: 'pictures/food-back.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }
        //alert from sweetalert2
        else {
            result.innerHTML='Over Weight : ' +bmi + 'try to choose healthy'
            Swal.fire({
                title: 'Over Weight!',
                text: 'try to choose healthy.',
                imageUrl: 'pictures/img7.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }
    }
    //alert of error from sweetalert2
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">you should enter a value?</a>'
          })
        result.innerHTML=""
    }
})





