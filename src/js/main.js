import "./slider";
import popups from "./modules/popups";
import {showPopupByTime} from "./modules/popups";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

document.addEventListener('DOMContentLoaded', () => { 
    "use strict";

    let modalState ={};
    changeModalState(modalState);

    popups();
    // showPopupByTime('.popup', 3000);

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after-click');

    forms(modalState);
    //calc
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

    timer('#timer', '2020-07-12');

    images();





});


