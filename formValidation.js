
const modal = document.getElementById('authModal');
const modalForm = document.querySelector('.modal-form');
const modalTitle = document.getElementById('modalTitle');
const fullNameInput = document.getElementById('fullName');
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmInput = document.getElementById('confirmPassword');
const toggleAuthText = document.getElementById('toggleAuthMode');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const loginBtn = document.querySelectorAll('.loginBtn');
const signupBtn = document.querySelectorAll('.signupBtn');


let mode="signup"
function handleSignup() {
  toggleAuthText.textContent = "ورود شود ؟";
  modal.classList.add("active");
  fullNameInput.parentElement.style.display = "block";
  confirmInput.parentElement.style.display = "block";
  toggleAuthText.onclick = handleLogin;
  modalTitle.textContent="ساختن حساب کاربری"
  mode="signup"

}

function handleLogin() {
  modal.classList.add("active");
  fullNameInput.parentElement.style.display = "none";
  confirmInput.parentElement.style.display = "none";
  toggleAuthText.textContent =
    "ثبت‌ نام نکرده‌اید؟ ثبت‌نام کنید";
  toggleAuthText.onclick = handleSignup;
  mode="login"
    modalTitle.textContent="ورود حساب کاربری"
}


toggleAuthText.onclick = handleSignup;

loginBtn.forEach(btn=>btn.addEventListener("click",handleLogin))
signupBtn.forEach(btn=>btn.addEventListener("click",handleSignup))




modalForm.addEventListener("submit", (e) => {
    const isValid=validateDefault();
    if(!isValid){
        e.preventDefault(); 
        return;
    } 

    alert("با موفقیت رجستر شدت")
  
});


modalCloseBtn.addEventListener("click",()=>{
    modal.classList.remove("active");
    fullNameInput.value="";
   email.value="";
   password.value="";
   confirmInput.value="";
  fullNameInput.style.outline = "1px solid black";
  email.style.outline = "1px solid black";
  password.style.outline = "1px solid black";
  confirmInput.style.outline = "1px solid black";
  document.querySelectorAll(".error").forEach(err=>{
    err.textContent=""
  })
})

function SetError(element, message) {
const parent=element.parentElement;
  const errorDisplay = parent.querySelector(".error");
  errorDisplay.textContent = message;
  element.style.outline = "1px solid red";
}

function SetSuccess(element) {
    const parent=element.parentElement;
  const errorDisplay = parent.querySelector(".error");
  errorDisplay.textContent = "";
  element.style.outline = "1px solid black";

}





function validateDefault() {
  let isValid = true;

  const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const fullName = fullNameInput.value.trim();
  const emailValue = email.value.trim().toLowerCase();
  const passwordValue = password.value.trim();
  const confirmPassword = confirmInput.value.trim();

 if(mode==="signup"){

     if (fullName === "") {
       SetError(fullNameInput, "نام ضروری است");
       isValid = false;
   
     } else if (fullName.length < 3) {
       SetError(fullNameInput, "نام باید بیشتر از ۳ حروف باشد");
       isValid = false;
   
     } else if (!nameRegex.test(fullName)) {
       SetError(fullNameInput, "باید تنها حروف شامل باشد");
       isValid = false;
   
     } else {
       SetSuccess(fullNameInput);
     }
 }


  if (emailValue === "") {
    SetError(email, "ایمیل ضروری است");
    isValid = false;

  } else if (!emailRegex.test(emailValue)) {
    SetError(email, "یک ایمیل درست وارد کنند");
    isValid = false;

  } else {
    SetSuccess(email);
  }

  
  if (passwordValue === "") {
    SetError(password, "رمز ضروری است");
    isValid = false;

  } else if (passwordValue.length < 8 && mode !=="login") {
    SetError(password, "رمز باید بیشتر از ۸ حروف باشد");
    isValid = false;

  } else {
    SetSuccess(password);
  }

  if(mode==="signup"){
      if (confirmPassword === "") {
        SetError(confirmInput, "رمز خود تایید کند");
        isValid = false;
    
      } else if (confirmPassword !== passwordValue) {
        SetError(confirmInput, "رمز شما مشابه نیست");
        isValid = false;
    
      } else {
        SetSuccess(confirmInput);
      }
  }



  return isValid;

}