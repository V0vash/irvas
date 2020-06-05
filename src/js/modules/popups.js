function popups(triggerSelector, popupSelector){
const trigger = document.querySelectorAll(triggerSelector),
      popup = document.querySelector(popupSelector),
      popupClose = document.querySelector(`${popupSelector} .popup_close`);
      
      console.log(trigger);

function bindPopup(){
     //open
    trigger.forEach((item) => {
        item.addEventListener('click',(e) => {
            console.log(e.target);
            e.preventDefault();
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    
    //close 
    popup.addEventListener('click', (e) => {
        if (e.target === popup){
            console.log(e.target);
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    //x -close
    popupClose.addEventListener('click', () =>{
        popup.style.display = 'none';
        document.body.style.overflow = '';
    });
}

bindPopup();

}

export default popups;