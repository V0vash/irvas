const checkNumInputs = (inputs) => {

inputs.forEach(item => {
    item.addEventListener('input', () => {
        item.value = item.value.replace(/\D/, '');
    });
});
};

export default checkNumInputs;
