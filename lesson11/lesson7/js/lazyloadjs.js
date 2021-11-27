let new_Images = document.querySelectorAll('img[data-src]');

const image_Loader = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const image_Options = {
    threshold: 0.5,
    rootmargin: "0, 0, -80px 0"
};

if('IntersectionObserver' in window) {
    const new_Observer = new IntersectionObserver((items, new_Observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                image_Loader(item.target);
                new_Observer.unobserve(item.target);
            }
        });
}, image_Options);

    new_Images.forEach((image) => {
        new_Observer.observe(image);
    });
} else {
    new_Images.forEach((image) => {
        image_Loader(image);
    });
}