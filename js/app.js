document.addEventListener('DOMContentLoaded', function (event) {
    
    const secHand = document.querySelector('.hand-second');
    const minHand = document.querySelector('.hand-minute');
    const hourHand = document.querySelector('.hand-hour');


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
        
        const hours = newDate.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    }
    
    setInterval(setDate, 1000);
    
});