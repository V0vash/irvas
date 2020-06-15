function images (){
    const imgPopup = document.createElement('div'),
          section = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    section.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImg);

    section.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target && e.target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if (e.target && e.target.matches('div')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            
        }
    });


}

export default images;