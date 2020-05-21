window.onload = _ => {
    document.querySelector('#spinner').style.display = 'none';
    document.querySelector('#year').innerHTML = new Date().getFullYear()
    $('.phone').mask('(00)0000-0000')
    $('.toast').toast({
        animation: true,
        autohide: true,
        delay: 10000
    })
}

const contate_nos = _ => {
    window.event.preventDefault()
    if (document.querySelector('#tell').value.length == 13) {
        if (validacaoEmail(document.querySelector('#e_mail'))) {
            document.querySelector('#tell').classList.remove("is-invalid")
            document.querySelector('#e_mail').classList.remove("is-invalid")

            document.querySelector('#nome').classList.add("is-valid")
            document.querySelector('#tell').classList.add("is-valid")
            document.querySelector('#e_mail').classList.add("is-valid")
            document.querySelector('#mensagem').classList.add("is-valid")

            $('.toast').toast('show')
        } else {
            document.querySelector('#e_mail').classList.add("is-invalid")
        }

    } else {
        document.querySelector('#tell').classList.add("is-invalid")
    }
    console.log('teste')
    return false
}

const validacaoEmail = field => {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true
    }
    return false
}