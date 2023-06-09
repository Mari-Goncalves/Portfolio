import { getInputInformation } from "./GetInputInformation.js"

let button = document.querySelector('#button-send-message')

function showUserMessage() {

    let {email, message} = getInputInformation()

    return alert(
        `${email}` + 
        "\n" + 
        `You wrote this: ${message}.` + 
        "\n" + 
        "Thanks :)"
    )
}

button.addEventListener('click', showUserMessage)