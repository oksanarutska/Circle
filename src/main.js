document.querySelector('.popup__container-button_run').addEventListener('click', function (e) {
   document.querySelector('.popup').classList.remove('show');
   document.querySelector('.roulette__button').classList.add('disabled');
    turnCircle()
});
document.querySelector('.popup__container-button_stop').addEventListener('click', function (e) {
    document.querySelector('.popup').classList.remove('show');
    document.querySelector('.roulette__button').classList.remove('disabled');
    document.querySelector('.roulette__circle').style.transform = 'rotate(0deg)'
});
document.querySelector('.roulette__button-run').addEventListener('click', function (e) {
    document.querySelector('.roulette__button').classList.add('disabled');
    turnCircle();

});
function turnCircle(){
    var angle = 0;
    var step = 1;
    var time = 5000 + Math.floor(Math.random() * 10000);
    const startTime = new Date();
    var turn = setInterval(
        function () {
            if (new Date().valueOf() - startTime.valueOf() > (time / 2)) {
                step--
            }
            else {
                step++
            }
            angle += step;
            document.querySelector('.roulette__circle').style.transform = `rotate(${-angle}deg)`
        }, 100
    );
    setTimeout(
        () => {
            clearInterval(turn);
            document.querySelector('.popup').classList.add('show');
            let contentPopup = document.querySelector('.popup__container-content_number');
            let offset = 30;
            //This is offset between starting point (beginning of 1) and arrow point
            // Dividing by 60 because we have 6 sections (360/6 = 60)
            // +1 - because we starting count from 1
            let countAngle = (Math.trunc((angle + offset) / 60)) % 6 + 1;
            contentPopup.textContent = countAngle;
            document.querySelector('.roulette__button').classList.remove('disabled');
        }, time)
}