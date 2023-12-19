const forms = document.querySelectorAll('#contactForm')

forms.forEach(form => {
    form.addEventListener('submit', event => {
        validateForm(event)
    })
})

const validateForm = (event) => {
    let formElements
    const nameElements = ['firstName', 'lastName', 'phone', 'email', 'select', 'textarea']
    formElements = event.currentTarget.elements

    for (let i = 0; i < nameElements.length; i++) {
        checkInput(formElements[nameElements[i]], event)
    }
}

const checkInput = (element, event) => {
    if (element === undefined) return
    if (element.value === '' || element === null) {
        element.style.border = '1px solid red'
        event.preventDefault()
    } else if (element.name === 'phone' && !Number(element.value)) {
        element.style.border = '1px solid red'
        event.preventDefault()
    }
    else { element.style.border = 'none' }
}