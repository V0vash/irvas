import checkNumInputs from "./checkNumInputs";

function forms (state){
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]'),
          message = {
              loading: 'Загрузка...',
              success: 'Спасибо, мы скоро с вами свяжемся',
              failure: 'Что-то пошло не так'
          };

    checkNumInputs(phoneInputs);

    const postData = async (url, data) =>{
        document.querySelector('.status').textContent = message.loading;
        const res = await fetch(url,{
            method: 'POST',
            body: data
        });
        return await res.text();

    };

    const clearInputs = () => {
        inputs.forEach(item =>{
            item.value='';
        });
    };

    forms.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMassage = document.createElement('div');
            statusMassage.classList.add('status');
            item.append(statusMassage);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') == 'end'){
                for(let key in state){
                    formData.append(key, state[key]);
                }
            } 

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                statusMassage.textContent = message.success;
            })
            .catch(() =>{
                statusMassage.textContent = message.failure;
            })
            .finally(() => {
                clearInputs();
                setTimeout(()=>{
                    statusMassage.remove();
                }, 5000);
            });


        });
    });



}

export default forms;