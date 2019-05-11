

////////////////////////////////////////////////////////////

var count = 0;

function change(){
    count++
    let template = `#banner-${count}`;
    let present = document.querySelector(template);

    let b = count-1;
    let previous = document.querySelector(`#banner-${b}`);

    if(b <= 0){
        b++
        previous = document.querySelector(`#banner-5`);
    }
    if(count >= 5){
        count = 0;
    }

    console.log("----------------", "present", present, "previous", previous, b)

    present.classList.add("banner-show");
    present.style.opacity = 1;


    previous.classList.remove("banner-show");
    previous.style.opacity = 0;

}

var time = window.setInterval(change, 2500)

document.addEventListener('copy', e => {

    alert("Lembre-se de usar os direitos autorais! ;)");

})
