let btn = document.querySelector('#button-send-message')

function sendMessage() {
    let email = document.querySelector('#write-email-contact').value
    let message = document.querySelector('#write-contact-message').value

    alert(
        `${email}` + 
        "\n" + 
        `You wrote this: ${message}.` + 
        "\n" + 
        "Thanks :)"
    )
}

btn.addEventListener('click', sendMessage)