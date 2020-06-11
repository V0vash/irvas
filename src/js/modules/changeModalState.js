import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs(windowWidth);
    checkNumInputs(windowHeight);

    function bindActionToElements(elem, event, prop){
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName){
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j){
                                    box.checked = true;
                                }
                            });
                        }else{
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop]= item.value;
                        break;
                }
                console.log(state);
            });
        });  
    }

bindActionToElements(windowForm, 'click', 'form');
bindActionToElements(windowWidth, 'input', 'width');
bindActionToElements(windowHeight, 'input', 'height');
bindActionToElements(windowType, 'change', 'type');
bindActionToElements(windowProfile, 'change', 'profile');

};

export default changeModalState;