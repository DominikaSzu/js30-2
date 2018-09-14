document.addEventListener('DOMContentLoaded', function (event) {
    
    const secHand = document.querySelector('.hand-second');
    const minHand = document.querySelector('.hand-minute');


    setDate = () => {
        const newDate = new Date();
        
//        Setting seconds hand
        
        const seconds = newDate.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secHand.style.transform = `rotate(${secondsDegrees}deg)`;
        
//        Setting minutes hand
        
        const minutes = newDate.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minutesDegrees}deg)`;
        
//        Setting hours hand

    }
    
    setInterval(setDate, 1000);
    
});