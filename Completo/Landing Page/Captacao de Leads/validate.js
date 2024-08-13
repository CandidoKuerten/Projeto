document.addEventListener("DOMContentLoaded", function () {
    const x = document.querySelector("#correcao");
    let mensagem = "";

    function validateNumber() {
        console.log('validado');
        if (parseInt(x.value) === 10) {
            return true;
        } else {
            mensagem = "Valor incorreto!";
            return false;
        }
    }

    function validateForm(event) {
        if (!validateNumber()) {
            event.preventDefault()
            document.querySelector("#mensagem").innerHTML = mensagem;
        }else{
            openModal()
        }
        setTimeout(() =>{
            location.reload()
        }, 5000)
    }

    document.querySelector("form").addEventListener("submit", validateForm);

    const modal = document.querySelector('.modal');
    const conteudo = document.querySelector('.conteudo');

    function openModal() {
        modal.classList.add('active');
        conteudo.classList.add('opacidade');
    }

    function closeModal() {
        modal.classList.remove('active');
        conteudo.classList.remove('opacidade');
    }

    window.openModal = openModal;
    window.closeModal = closeModal;
});
