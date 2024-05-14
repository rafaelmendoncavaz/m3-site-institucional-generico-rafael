const modalHeaderButton = document.querySelector('.header__button--modal')
const modalFaqButton = document.querySelector('.button__faq--modal')
const modal = document.querySelector('.modal__container')
const closeModal = document.querySelector('.modal--close')
const modalInput = document.querySelector('.modal__input')

modalHeaderButton.addEventListener('click', function(e) {
    e.stopPropagation()

    modal.showModal()
    closeModal.addEventListener('click', function(e) {
        e.stopPropagation()

        modal.close()
        modalInput.value = ''
    })
})

modalFaqButton.addEventListener('click', function(e) {
    e.stopPropagation()

    modal.showModal()
    closeModal.addEventListener('click', function(e) {
        e.stopPropagation()

        modal.close()
        modalInput.value = ''
    })
})