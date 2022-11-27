const exitNewAccountPage = document.querySelector('.exitNewAccountPage');
const createAccountBtn = document.querySelector('.createNewAccount');
const newAccountPage = document.querySelector('.newAccountPage');
const newAccountPageBtn = document.querySelector('.getStartedBtn');

newAccountPageBtn.addEventListener('click', function (){
    console.log("button clicked")
    newAccountPage.classList.add("showNewAccountPage");
})

exitNewAccountPage.addEventListener('click', function (){
    console.log("exit the page")
    newAccountPage.classList.remove("showNewAccountPage")
})

const newUserNameInput = document.querySelector('.newUserName')
const newEmailInput = document.querySelector('.newEmail')
const newAgeInput = document.querySelector('.newAge')

function createAccount(event) {
    createAccountBtn.addEventListener('click', function () {
        console.log("clicked create new account btn")
        const newUserName = newUserNameInput.value;
        const newEmail = newEmailInput.value;
        const newAge = newAgeInput.value;
        console.log(newUserName)
        console.log(newEmail)
        console.log(newAge)

        event.preventDefault();

        const post = {
            userName: event.target.createUserName.value,
            email: event.target.createNewAge.value,
            age: event.target.createNewEmail.value
        }
        console.log("hej12332")
        fetch("https://hsvl.onrender.com/users", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log("new account created")
    })
}