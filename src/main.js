document.querySelector('.popup_button').addEventListener('click', function (e) {
   document.querySelector('.popup').classList.remove('show');
    turnCircle()
});
document.querySelector('.popup_button_stop').addEventListener('click', function (e) {
    document.querySelector('.popup').classList.remove('show');
    document.querySelector('.wrapper_circle').style.transform = 'rotate(0deg)'
});
document.querySelector('#circle_button').addEventListener('click', function (e) {
    document.querySelector('.wrapper_circle_button').classList.add('disabled');
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
            document.querySelector('.wrapper_circle').style.transform = `rotate(${-angle}deg)`
        }, 100
    );
    setTimeout(
        () => {
            clearInterval(turn);
            document.querySelector('.popup').classList.add('show');
            let contentPopup = document.querySelector('.popup_content');
            let offset = 30;
            //This is offset between starting point (beginning of 1) and arrow point
            // Dividing by 60 because we have 6 sections (360/6 = 60)
            // +1 - because we starting count from 1
            let countAngle = (Math.trunc((angle + offset) / 60)) % 6 + 1;
            contentPopup.textContent = countAngle;
            document.querySelector('.wrapper_circle_button').classList.remove('disabled');
        }, time)
}