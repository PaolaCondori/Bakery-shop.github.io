const carroussel = [...document.querySelectorAll('.carroussel')];

const arrow_right = [ ...document.querySelectorAll('.arrow-right')]
const arrow_left = [...document.querySelectorAll('.arrow-left')]

carroussel.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientReact();
    let containerWidth = containerDimensions.width;

    arrow_right[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    arrow_left[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

})