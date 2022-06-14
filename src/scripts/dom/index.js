/* 
 1: selecionar o elemento no dom 
 2: fazer um toggle para trocar o display
*/
const modalDomElements = {
  toggleModalDisplayButton: document.querySelector('#toggleModalDisplayButton'),
  closeModalButton: document.querySelector('#closeModalButton'),
  mobileNavMenu: document.querySelector('.mobile-modal-menu')
}

const modalToggleDisplay = {
  toggle: () => {
    function setClickListener(...domElements) {
      domElements.forEach( domElement => {
        domElement.addEventListener('click', () => {
          function toggleModalDisplay () {
            const modal = modalDomElements.mobileNavMenu
            const toggleModalDisplay = modal.classList.toggle('visible')
          }
          toggleModalDisplay()
        })
      })
    }
    setClickListener(
      modalDomElements.toggleModalDisplayButton,
      modalDomElements.closeModalButton
    )
  },
}

const toggleModalState = modalToggleDisplay.toggle

export {toggleModalState}