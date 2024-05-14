const modalHeaderButton = document.querySelector('.header__button--modal')
const modalFaqButton = document.querySelector('.button__faq--modal')
const modal = document.querySelector('.modal__container')

modalHeaderButton.addEventListener('click', function(e) {
    e.stopPropagation()

    modal.showModal()
})

modalFaqButton.addEventListener('click', function(e) {
    e.stopPropagation()

    modal.showModal()
})