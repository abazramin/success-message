// All Varibal
const BoxAll = document.getElementById("container");
const boxingOne = document.getElementById("boxing-1");
const BoxingTwo = document.getElementById("boxing-2");

const userEmail = document.getElementById("user-email");
const invalidEmail = document.getElementById("invalid-email");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("btn-submit");

const configMesEl = document.getElementById("card-succes");
const desMeg = document.getElementById("dismiss-message");


function fromSuccess() {
    configMesEl.classList.add("active");
    BoxAll.classList.add("success");
    boxingOne.style.display = "none";
    BoxingTwo.style.display = "none";
}
fromSuccess();
function validateEmail(email) {
    const emailRegex = /^[^\s@] +@[^\s@] +\.[^\s@]+$/
    return emailRegex.test(email);
}
validateEmail(email);
submitBtn.addEventListener("click", () => {
    e.preventDefult()
    const email = emailInput.Value.trim();

    if (validateEmail(email)) {
        fromSuccess();
        userEmail.innerHTML = email;
        emailInput.value = "";

        invalidEmail.classList.remove("active");
        emailInput.classList.remove("active");

    } else {

        invalidEmail.classList.add("active");
        emailInput.classList.add("active");


    }
})


desMeg.addEventListener("click", () => {
    boxingOne.style.display = "block";
    BoxingTwo.style.display = "block";
    BoxAll.classList.remove("success");
    configMesEl.classList.remove("active")
})