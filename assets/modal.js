

// HTML -> <div class="side-modal"></div>
// JS -> const sideModal = document.querySelector(".side-modal")



smallpic.addEventListener('mouseover', () => {
    sideModal.style.display = 'block'
    sideModal.textContent = ""
})

smallpic.addEventListener("mouseout", () => {
    sideModal.style.display = 'none'; // Hide the modal
}); 