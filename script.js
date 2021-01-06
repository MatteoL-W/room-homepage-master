let number = 1;
function actualiserDiapo(param) {
    switch (param) {
        case 1:
            document.getElementById('hero_illustration').style.backgroundImage = "url('../images/desktop-image-hero-1.jpg')";
            document.getElementById('hero_title').innerHTML = 'Discover innovative ways to decorate';
            document.getElementById('hero_text').innerHTML = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.';
            break;
        case 2:
            document.getElementById('hero_illustration').style.backgroundImage = "url('../images/desktop-image-hero-2.jpg')";
            document.getElementById('hero_title').innerHTML = 'We are available all across the globe';
            document.getElementById('hero_text').innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
            break;
        case 3:
            document.getElementById('hero_illustration').style.backgroundImage = "url('../images/desktop-image-hero-3.jpg')";
            document.getElementById('hero_title').innerHTML = 'Manufactured with the best materials';
            document.getElementById('hero_text').innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
            break;
    }
}
actualiserDiapo(number);




let leftArrow = document.getElementById('left_arrow');
let rightArrow = document.getElementById('right_arrow');

leftArrow.addEventListener('click', () => {
    number = number - 1;
    if (number == 0) {
        number = 3;
    }
    actualiserDiapo(number);
});

rightArrow.addEventListener('click', () => {
    number = number + 1;
    if (number == 4) {
        number = 0;
    }
    actualiserDiapo(number);
});

let hamburger = document.getElementById('hamburger');
let close = document.getElementById('close');

hamburger.addEventListener('click', () => {
    document.getElementById('room__hero-menu-responsive').style.display='flex';
    document.getElementById('black_overlay').style.visibility='visible';
    document.getElementById('black_overlay').style.opacity='1';
});

close.addEventListener('click', () => {
    document.getElementById('room__hero-menu-responsive').style.display='none';
    document.getElementById('black_overlay').style.visibility='hidden';
    document.getElementById('black_overlay').style.opacity='0';
});