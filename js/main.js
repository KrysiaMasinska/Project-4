const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let fahrenheit; //T(*F) = T(*C) * 1.8 + 32;
let celsius; //T(*C) = (T(*F) - 32) / 1.8;

const swap = () => {
    if (one.innerText === '°C') {
        one.innerText = '°F';
        two.innerText = '°C';
        result.innerText = '';
    } else {
        one.innerText = '°C';
        two.innerText = '°F';
        result.innerText = '';
    }
};

const celTofah = () => {
    fahrenheit = converter.value * 1.8 + 32;
    result.innerText = `${converter.value} °C to ${fahrenheit.toFixed(1)} °F`
    converter.value = '';
};

const fahToCel = () => {
    celsius = (converter.value - 32) / 1.8;
    result.innerText = `${converter.value} °F to ${celsius.toFixed(1)} °C`
    converter.value = '';
};

const convert = ()=>{
    if(one.innerText === '°C'){
        celTofah();
    }
    else{
        fahToCel();
    }
}

resetBtn.addEventListener('click', function(){
    converter.value = '';
    result.innerText = '';
});

changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', convert);