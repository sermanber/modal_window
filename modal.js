const openModal = document.querySelector('.modal-btn');
const closeModal = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

openModal.addEventListener('click', function(){
    modalOverlay.classList.add('show-modal');
});

closeModal.addEventListener('click', function(){
    modalOverlay.classList.remove('show-modal')
})