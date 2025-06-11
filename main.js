function howItWorks() {
  const slide1 = document.getElementById('slide1');
  const slide2 = document.getElementById('slide2');

  slide1.classList.add('slide-out-right');
  slide1.classList.remove('active');

  slide2.style.display = 'flex';
  slide2.classList.add('slide-in-left');

  setTimeout(() => {
    slide2.classList.remove('slide-in-left');
    slide2.classList.add('active');
  }, 50);

  setTimeout(() => {
    slide1.style.display = 'none';
  }, 800);
}


const container = document.getElementById('reviews-container');
const track = container.querySelector('.reviews-track');


track.innerHTML += track.innerHTML;

let scrollPos = 0;
let isScrolling = false;

function step() {
  if (isScrolling) {
    scrollPos += 2;

    if (scrollPos >= track.scrollWidth / 2) {
      scrollPos = 0;
    }

    container.scrollLeft = scrollPos;
  }
  requestAnimationFrame(step);
}

step();

container.addEventListener('mouseenter', () => {
  isScrolling = true;
});

container.addEventListener('mouseleave', () => {
  isScrolling = false;
});

const buttonCircleBox = document.getElementById('circle-box-button');
const circleBox = document.getElementById('circle-box');

function showCircle(){
  circleBox.style.display="inline";
  buttonCircleBox.style.display="none";
}


function newsletterSubmit(){
    newsletterBox = document.getElementById("newsletter-box");
    newsletterInput = document.getElementById('newsletter-input').value;
    invalidNewsletter = document.getElementById('newsletter-invalid')
    let thanks =
    `
    <div class="thanks-all">
      <div class="thanks-title">The bonus has been sent to your email address.</div>
      <div class="thanks-logo"><img src="images/logo.png" class="img-thanks"></div>
    </div>
    `

    if(/\@/.test(newsletterInput) && /\./.test(newsletterInput)){
      newsletterBox.innerHTML = thanks;
    }else{
      invalidNewsletter.innerHTML = "wrong email";
    }
}

function getStarted(){
  window.location.href = "register.html";
}


function getLogin(){
  let loginUsernameInput = document.getElementById("login-username");
  let loginPasswordInput = document.getElementById("login-password");

  let loginCorrect = "xostorage";
  let passwordCorrect = "admin123"

  let loginInvalidBox = document.getElementById('login-invalid-box')
  let loginInvalidLoginOrPassword = 
  `
    <p class="login-invalid-text">Invalid username or password</p>
  `

    if(loginPasswordInput.value === passwordCorrect && loginUsernameInput.value === loginCorrect)
    {
      window.location.href = "login-success.html";
    }else{
      loginPasswordInput.value = "";
      loginUsernameInput.value = "";
      loginInvalidBox.innerHTML = loginInvalidLoginOrPassword;
    }
}

function getSignUp(){
  let registerName = document.getElementById('first-name').value;
  let registerSurname = document.getElementById('surname').value;
  let registerUsername = document.getElementById('username').value; 
  let registerEmail = document.getElementById('email').value;
  let registerPassword = document.getElementById('password').value;
  let registerPasswordRepeat = document.getElementById('password-repeat').value;

  let registerInvalidBox = document.getElementById('register-invalid-box');
  let registerInvalidTekst = `<p class="register-invalid-text"></p>`

  let registerNameBoolean;
  let registerSurnameBoolean;
  let registerUsernameBoolean;
  let registerEmailBoolean;
  let registerPasswordBoolean;
  let registerRepeat;

    registerInvalidBox.innerHTML="";

    if(registerName.length>2){
      registerNameBoolean = true;
    }else{
      registerNameBoolean = false;
      registerInvalidBox.innerHTML += "*invalid first name<br>"
      document.getElementById('first-name').value="";
    }
    
    if(registerSurname.length>2){
      registerSurnameBoolean = true;
    }else{
      registerSurnameBoolean = false;
      registerInvalidBox.innerHTML += "*invalid surname<br>"
      document.getElementById('surname').value="";
    }
    
    if(/^[a-zA-Z]+$/.test(registerUsername) && registerUsername.length>2){
      registerUsernameBoolean = true;
    }else{
      registerUsernameBoolean = false;
      registerInvalidBox.innerHTML += "*invalid username<br>"
      document.getElementById('username').value="";
    }

    if(/\@/.test(registerEmail) && /\./.test(registerEmail)){
      registerEmailBoolean = true;
    }else{
      registerEmailBoolean = false;
      registerInvalidBox.innerHTML += "*invalid email<br>"
      document.getElementById('email').value="";    
    }

    if(registerPassword.length>9){
      registerPasswordBoolean = true;
    }else{
      registerPasswordBoolean = false;
      registerInvalidBox.innerHTML += "*invalid password<br>"
      document.getElementById('password').value="";   
      document.getElementById('password-repeat').value="";
    }

    if(registerPassword === registerPasswordRepeat){
      registerRepeat = true;
    }else{
      registerRepeat = false;
      registerInvalidBox.innerHTML += "*passwords do not match<br>"
      document.getElementById('password').value="";   
      document.getElementById('password-repeat').value="";
    }

    if(registerNameBoolean && registerSurnameBoolean && registerUsernameBoolean && registerEmailBoolean && registerPassword && registerRepeat)
    {
      window.location.href="register-success.html"
    }
}