import "./slider";
import popups from "./modules/popups";
import {showPopupByTime} from "./modules/popups";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

document.addEventListener('DOMContentLoaded', () => { 
    "use strict";

    popups('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    popups('.phone_link', '.popup', '.popup_close');
    // showPopupByTime('.popup', 3000);
    popups('.glazing_price_btn', '.popup_calc', '.popup_calc_close');

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after-click');

    forms();

});


