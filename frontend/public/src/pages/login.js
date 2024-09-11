import { authUser } from "../data/data.js";

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
`;

const loginConfirm = `
    
`;

document.querySelector(".auth").innerHTML = login;

document.querySelector('.next').addEventListener('click',()=>{
    const ph = document.querySelector('.ph-num').value;
    authUser(ph);
    document.querySelector('.ph').innerHTML = ph;
    if (ph){
        document.querySelector('.loginPage1').style.display = 'none';
        document.querySelector('.loginPage2').style.display = 'flex';
    }
})
document.querySelector('.submit').addEventListener('click',()=>{
    const pw = document.querySelector('.input-pw').value;
    if (pw){
        try{
            const res = fetch()
        }catch(err){

        }
    }
})