const modalWrapper = document.querySelector('.modal-wrapper')
const buttonOpenModal = document.getElementById('openModal')


buttonOpenModal.addEventListener('click', showModal)

function showModal(event) {
  modalWrapper.classList.remove('invisible')
  
}
// div.classList.remove('invisible')

document.addEventListener('keyboardevent', document.onkeydown = function (event) {
    const existInvClass = modalWrapper.classList !== 'invisible'  
    const isEscKey = event.key === 'Escape'
    if (existInvClass) {
        if (isEscKey) {
            modalWrapper.classList.add('invisible')
        }        
    }

})