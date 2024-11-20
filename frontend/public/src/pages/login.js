import { authUser, getUser } from "../data/data.js";

const user = {
    id : 1,
    name: "Kumar",
    location: "Dimapur",
    pin: "798621",
    seller: false,

}

const login = `
    <div class="loginPage1">
        <div class="logo"></div>
        <div class="auth-error">
            <h1>Incorrect email</h1>
            <p>Email not found</p>
        </div>
        <div class="container">
            <h1>Sign in</h1>
            <label for="email_ph"><b>Email or mobile phone number</b></label>
            <input type="text" placeholder="" name="email_ph" required class="ph-num">
            <button type="submit" class="next">Continue</button>
            <span class="policy"></span>
            <span class="help"></span>
            <div class="query">
                <span class="work">Buying for work?</span>
                <span class="business">Shop on Amazon Business</span>
            </div>
        </div>
        <div class="sign_up">
            <span class="new">New to Amazon?</span>
            <button class="create-btn">Create your Amazon account</button>
        </div>
    </div>
    <div class="loginPage2" display="">
        <span class="logo"></span>
        <div class="container">
            <h1 class="sign-in">Sign in</h1>
            <h1 class="ph"><span>Change</span></h1>
            <label for="password" class="password">Password <span>Forgot password?</span></label>
            <input type="text" class="input-pw" placeholder="" name="password" required>
            <button type="submit" class="submit">Sign in</button>
            <span class="help"><input type="checkbox" />Keep me signed in</span>
            <span class="or">or</span>
            <button class="get-otp">Get an OTP on your phone</button>
        </div>
    </div>
    <div class="signup" display="">
        <span class="logo"></span>
        <div class="container">
            <h1 class="sign-up">Create Account</h1>
            <label for="name" class="name">Your name</label>
            <input type="text" class="input-name" placeholder="First and last name" name="name" required ></input>
            <label for="contact" class="contact">Mobile number</label>
            <input type="number" class="input-contact" placeholder="" name="contact" required>
            <label for="password" class="password">Password</label>
            <input type="text" class="input-password" placeholder="At least 6 characters" name="password" required>
            <button type="submit" class="verify">verify number</button>
        </div>
    </div>
    <div class="verify-otp" display="">
        <span class="logo"></span>
        <div class="container" display="">
            <h1>Verify mobile number</h1>
            <p>A text with One Time Password (OTP) has been sent to your mobile number:<span class="ph"></span></p>
            <label for="otp" class="password">Enter OTP: <span class="resend-otp">Resent OTP</span></label>
            <input type="text" class="input-otp" placeholder="" name="otp" required>
            <button type="submit" class="create">Create your Amazon account</button>
        </div>
    </div>
`;

const loginConfirm = `
    
`;

document.querySelector(".auth").innerHTML = login;
const num = document.querySelector('.ph-num').value;
console.log(num.length);

document.querySelector('.next').addEventListener('click',async()=>{
    const ph = document.querySelector('.ph-num').value;
    const res = await authUser(ph);
    console.log(res.length);
    //console.log(JSON.stringify(res));

    if (res.error){
        alert('Something went wrong! Please try again');
    } else if (res.length === 1){
        document.querySelector('.ph').innerHTML = ph;
        document.querySelector('.loginPage1').style.display = 'none';
        document.querySelector('.loginPage2').style.display = 'flex';
    }else {
        document.querySelector('.auth-error').style.display = 'flex';
    }
})
document.querySelector('.submit').addEventListener('click', async ()=>{
    const pw = document.querySelector('.input-pw').value;
    const ph = document.querySelector('.ph').value;
    const res = await getUser(pw);
    console.log("clicked");
    if (pw,ph){
        try{
            
        }catch(err){

        }
    }
});
document.querySelector('.create-btn').addEventListener('click', () => {
    document.querySelector('.signup').style.display = 'flex';
    document.querySelector('.loginPage1').style.display = 'none';
    document.querySelector('.loginPage2').style.display = 'none';
})
document.querySelector('.verify').addEventListener('click', (e) => {
    e.preventDefault();

    const OTP = Math.floor(100000 + Math.random() * 900000);
    console.log(OTP);


    const nameInput = document.querySelector('.input-name');
    const phInput = document.querySelector('.input-contact');
    const pwInput = document.querySelector('.input-password');

    const name = nameInput.value;
    const ph = phInput.value;
    const pw = pwInput.value;
    console.log(name,ph,pw);

    //document.querySelector('.name-error').textContent = '';

    let valid = true;

    if (!name) {
        valid = false;
        nameInput.placeholder = "Please enter your name";
        nameInput.classList.add('error-name');
    }

    if (!ph) {
        valid = false;
        phInput.placeholder = "Please enter phone number";
        phInput.classList.add('error-contact')
    }

    if (!pw) {
        valid = false;
        pwInput.placeholder = "Please enter password";
        pwInput.classList.add('error-password')
    }

    if (valid) {

        const userOTP = OTP;

        sessionStorage.setItem('otp', userOTP);
        sessionStorage.setItem('contact', ph);

        console.log(name, ph, pw);
        
        document.querySelector('.signup').style.display = 'none';
        document.querySelector('.verify-otp').style.display = "flex";
        document.querySelector('.loginPage1').style.display = 'none';
        document.querySelector('.loginPage2').style.display = 'none';
        setTimeout(() => {
            alert(`Your OTP is: ${OTP}`);
        }, 2000);
    }
});

document.querySelector('.create').addEventListener('click', async() => {
    const enteredOTP = document.querySelector(".input-otp").value;
    const userOTP = sessionStorage.getItem('otp');

    if (enteredOTP === userOTP){
        console.log("Successful");
    }else{
        alert("Incorrect OTP")
    }
});
document.querySelector('.resend-otp').addEventListener('click', () => {
    setTimeout(() => {
        alert(sessionStorage.getItem('otp'));
    }, 2000)
});
document.querySelector('.get-otp').addEventListener('click', () => {
    const OTP = Math.floor(100000 + Math.random() * 900000);

    sessionStorage.setItem('otp', OTP);

    document.querySelector('.signup').style.display = 'none';
    document.querySelector('.verify-otp').style.display = "flex";
    document.querySelector('.loginPage1').style.display = 'none';
    document.querySelector('.loginPage2').style.display = 'none';
    setTimeout(() => {
        alert(sessionStorage.getItem('otp'));
    }, 2000);
})