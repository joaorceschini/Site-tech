document.querySelector('.open-menu').addEventListener('click', e => {

    document.querySelector('header .menu').classList.add('open');

});

document.querySelector('.close-menu button').addEventListener('click', e => {

    document.querySelector('header .menu').classList.remove('open');

});

document.querySelector('.menu .backdrop').addEventListener('click', e => {

    document.querySelector('header .menu').classList.remove('open');

});

////////////////////////////////////////////////////////////

var time = window.setInterval(change, 1000)

var count = 0;

function change(){
    count++
    let template = `#banner-${count}`;
    let present = document.querySelector(template)

    let b = count-1;
    let previous = document.querySelector(`#banner-${b}`)

    if(b <= 0){
        b++
        previous = document.querySelector(`#banner-4`)
    }
    if(count >= 4){
        count = 0;
    }

    console.log("----------------", "present", present, "previous", previous, b)

    present.classList.add("banner-show");
    present.style.opacity = 1;


    previous.classList.remove("banner-show");
    previous.style.opacity = 0;
    //present.classList.remove("banner-hidden");
    //previous.classList.add("banner-hidden");

}

document.addEventListener('copy', e => {

    alert("Lembre-se de usar os direitos autorais! ;)");

})

document.addEventListener('transitionend', e => {

    console.log("Lembre-se de usar os direitos autorais! ;)");

})

///////////////////////////////////////////////////////////////////////

var objeto = document.querySelector('.image');

objeto.addEventListener("click", e => {

    objeto.style.opacity = 0;

});
