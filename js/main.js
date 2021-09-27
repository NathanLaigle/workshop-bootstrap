const sendButton = document.querySelector('#sendButton');
const formSend = document.querySelector('#formSend');
const modal = new bootstrap.Modal(document.querySelector('#modal'));
const closeModal = document.querySelector('#closeModal');

sendButton.addEventListener('click', () => {
  const pseudo = formSend['pseudo'].value;
  const comment = formSend['comment'].value;
  if (!pseudo || !comment) {
    modal.toggle();
  }
});

closeModal.addEventListener('click', () => {
  modal.toggle();
});
