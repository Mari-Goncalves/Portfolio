function getInputInformation() {

    let info = {
        email: document.querySelector('#write-email-contact').value,
        message: document.querySelector('#write-contact-message').value
    }
    return info

}
export {getInputInformation}