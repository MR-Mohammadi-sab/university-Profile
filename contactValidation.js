
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const sendContactBtn = document.getElementById('sendContactBtn');
const contactSubject = document.getElementById('contactSubject');
const contactMessage = document.getElementById('contactMessage');
const contactForm = document.querySelector('.contactForm');










contactForm.addEventListener("submit", (e) => {
    const isValid=validateDefaultContact();
    if(!isValid){
        e.preventDefault(); 
        return;
    } 

    alert("با موفقیت رجستر شدت")
  
});



function SetErrorContact(element, message) {
const parent=element.parentElement;
  const errorDisplay = parent.querySelector(".error");
  errorDisplay.textContent = message;
  element.style.outline = "1px solid red";
}

function SetSuccessContact(element) {
    const parent=element.parentElement;
  const errorDisplay = parent.querySelector(".error");
  errorDisplay.textContent = "";
  element.style.outline = "1px solid black";

}





function validateDefaultContact() {
  let isValid = true;

  const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const fullName = contactName.value.trim();
  const emailValue = contactEmail.value.trim().toLowerCase();
  const contact = contactMessage.value.trim();
  const subject = contactSubject.value.trim();


     if (fullName === "") {
       SetErrorContact(contactName, "نام ضروری است");
       isValid = false;
   
     } else if (fullName.length < 3) {
       SetErrorContact(contactName, "نام باید بیشتر از ۳ حروف باشد");
       isValid = false;
   
     } else if (!nameRegex.test(fullName)) {
       SetErrorContact(contactName, "باید تنها حروف شامل باشد");
       isValid = false;
   
     } else {
       SetSuccessContact(contactName);
     }
 


  if (emailValue === "") {
    SetErrorContact(contactEmail, "ایمیل ضروری است");
    isValid = false;

  } else if (!emailRegex.test(emailValue)) {
    SetErrorContact(contactEmail, "یک ایمیل درست وارد کنند");
    isValid = false;

  } else {
    SetSuccessContact(contactEmail);
  }

  if (contact === "") {
    SetErrorContact(contactMessage, "فیلد ضروری است");
    isValid = false;

  }  else {
    SetSuccessContact(contactEmail);
  }
  if (subject === "") {
    SetErrorContact(contactSubject, "فیلد ضروری است");
    isValid = false;

  } else {
    SetSuccessContact(contactEmail);
  }


  return isValid;

}