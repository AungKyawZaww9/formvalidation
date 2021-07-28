const form = document.getElementById('form');
// console.log(form);

const username = document.getElementById('username');
// console.log(username);

const email = document.getElementById('email');
// console.log(email);

const password = document.getElementById('password');
// console.log(password);

const cfmpassword = document.getElementById('cfmpassword');
// console.log(cfmpassword);

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     // console.log(e);
//     // console.log("hello");
//
//
//
//     if(username.value === ''){
//         showerror(username,"Username required");
//     }else{
//         showsuccess(username);
//     }
//
//     if(email.value === ''){
//         showerror(email ,'email required');
//     }else if(!validateEmail(email.value)){
//         showerror(email,'Email is not valid');
//     }else{
//         showsuccess(email);
//     }
//
//     if(password.value === ''){
//         showerror(password ,'password required');
//     }else{
//         showsuccess(password);
//     }
//
//     if(cfmpassword.value === ''){
//         showerror(cfmpassword ,'Confirm-password required');
//     }else if(password.value !== cfmpassword.value){
//         showerror(cfmpassword,'Password do not match');
//     }else{
//         showsuccess(cfmpassword);
//     }
//
//
//
// });



function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";
    // formcontrol.classList.add('error');

    const small = formcontrol.querySelector('small');
    // console.log(small);
    small.innerText = message;

}

function showsuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.classList = "form-control success";
    // formcontrol.classList.add(success);
}


// for checking email format (regluar expression ) this start (re) behind
// function validateEmail(email){
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

//Check Required Field
function checkrequired(inputarrs){
    // console.log(inputarrs);

    inputarrs.forEach((inputarr)=>{
        // console.log(inputarr);
        // console.log(inputarr.value); //get value
        // console.log(inputarr.id); //get id

        if(inputarr.value === ''){
            showerror(inputarr,`${getfieldname(inputarr)} is required`);

        }else{
            showsuccess(inputarr);
        }

    });
}

//Get Field Name
//array ထဲမှာရှိတဲ့ စာတွေကို ရှေတစ်လုံးကို အကြီးပြောင်းပြီး နောက်စာလုံးထည့်

function getfieldname(inputarr){
    // console.log("hey");
  return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}
// getfieldname(username);


//Check Input Length
function checklength(input,min,max){
    if(input.value.length < min){
        showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input,`${getfieldname(input)} must be less than ${max} characters`);
    }else{
        showsuccess(input);
    }
}

//Check Email
function checkemail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());

    if(re.test(input.value)){
        showsuccess(input);
    }else{
        showerror(input,'Email is not valid');
    }
}

//Check Password Match
function checkpasswordsmatch(input1, input2){
    if(input1.value !== input2.value){
        showerror(input2,'Password is not match');
    }
}


//METHOD 2
form.addEventListener('submit',(e)=>{
    e.preventDefault();
   // console.log("hey");

    checkrequired([username,email,password,password,cfmpassword]);
    checklength(username,3,15);
    checklength(password,6,25);

    checkemail(email);

    checkpasswordsmatch(password,cfmpassword);
});