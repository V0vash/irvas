
function showPopupByTime(popupSelector, time){
    const popup = document.querySelector(popupSelector);

    setTimeout(()=>{
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    },time);
}

function popups(){
function bindPopup(triggerSelector, popupSelector, popupCloseSelector, closeClickOverlay = true){
    const trigger = document.querySelectorAll(triggerSelector),
      popup = document.querySelector(popupSelector),
      popupClose = document.querySelector(`${popupSelector} ${popupCloseSelector}`),
      windows = document.querySelectorAll('[data-popup]');
      
     //open
    trigger.forEach((item) => {
        item.addEventListener('click',(e) => {
            if(e.target) {
            e.preventDefault();
            }

            windows.forEach(item =>{
                item.style.display = 'none';
            });

            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    
    //close 
    popup.addEventListener('click', (e) => {
        if (e.target === popup && closeClickOverlay){
            windows.forEach(item =>{
                item.style.display = 'none';
            });
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    //x -close
    popupClose.addEventListener('click', () =>{
        windows.forEach(item =>{
            item.style.display = 'none';
        });
        popup.style.display = 'none';
        document.body.style.overflow = '';
    });
}

bindPopup('.popup_engineer_btn', '.popup_engineer', '.popup_close');
bindPopup('.phone_link', '.popup', '.popup_close');
bindPopup('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
bindPopup('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
bindPopup('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);


}

export default popups;
export {showPopupByTime};