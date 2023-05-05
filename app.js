const activeButton = document.querySelectorAll('.activeButton');
const items = document.querySelectorAll('.accordion__item');

function deleteClass() {
    items.forEach(item => item.classList.remove('active'));
}

function deleteAnimation() {
    activeButton.forEach(button => button.classList.remove('animation'));
}

function toggleAccordion() {
    const accordionGroup = this.closest('.accordion__group');
    const accordionItem = accordionGroup.nextElementSibling;
    const isAccordionActive = accordionItem.classList.contains('active');

    deleteClass();
    deleteAnimation()
    if (!isAccordionActive) {
        accordionItem.classList.add('active');
        this.classList.add('animation');
    }
}

activeButton.forEach(button => {
    button.addEventListener('click', toggleAccordion);
});
