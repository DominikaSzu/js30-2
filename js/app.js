document.addEventListener('DOMContentLoaded', function (event) {
    
    const secHand = document.querySelector('.hand-second');


    setDate = () => {
        const newDate = new Date();
        
//        Setting seconds hand
        
        const seconds = newDate.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360);
        secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    }
    
    setInterval(setDate, 1000);
    
});