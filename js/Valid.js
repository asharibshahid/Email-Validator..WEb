console.log("This is my scipt")


let result =
{
    "email": "support@emailvalidation.io",
    "user": "support",
    "tag": "",
    "domain": "emailvalidation.io",
    "smtp_check": true,
    "mx_found": true,
    "did_you_mean": "",
    "role": true,
    "disposable": false,
    "score": 0.64,
    "state": "deliverable",
    "reason": "valid_mailbox",
    "free": false,
    "format_valid": true,
    "catch_all": null
}
SubmitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked");
     let key = "ema_live_4c3twrkrb6TcszLaS2LM4WaNGWkFGjkJa34J3bfu"
    let email = document.getElementById("Email").value;
     let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
   
    let str = ``
    for (key of Object.keys(result)) {
        str = str + `<div>${key}: ${result[key]} </div>`

    }
    console.log(str);
    ResultCont.innerHTML = str
})








