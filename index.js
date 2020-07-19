let url = new URL(window.location.href);
console.log(`First Url: ${url}`);

let search = new URLSearchParams(url.search);
let size = search.get('size');
let colors = search.getAll('color');
let manufacturers = search.getAll('manufacturer');

const form = document.forms[0];

form.elements.size.value = size;

const options = document.querySelectorAll('[name="manufacturer"] option');

if (colors) {
    for (let i = 0; i < form.elements.color.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            if (form.elements.color[i].value === colors[j]) {
                form.elements.color[i].checked = 'true';
            }
        }
    }
}


for (let i = 0; i < form.elements.color.length; i++) {
    for (let j = 0; j < colors.length; j++) {
        if (form.elements.color[i].value === colors[j]) {
            form.elements.color[i].checked = 'true';
        }
    }
}

options.forEach(el=> {
    if(manufacturers.includes(el.value)) el.selected= true
});

document.getElementById('colors').addEventListener('input', createNewURL);
document.getElementById('sizes').addEventListener('input', createNewURL);
document.getElementById('manufacturer').addEventListener('input', createNewURL);4

const newURL = {};
newURL.base = url.origin+url.pathname+'?';
newURL.size = 'size=';
newURL.color = '&color=';
newURL.manufacturer = '&manufacturer=';

function createNewURL() {
    let fullURL = newURL.base;
    let newSize = form.elements.size.value;
    fullURL = fullURL+newURL.size+newSize;

    for (let i = 0; i< form.elements.color.length; i++) {
        if (form.elements.color[i].checked) fullURL = fullURL + newURL.color + form.elements.color[i].value;
    }

    options.forEach( (el => {
        if(el.selected) fullURL = fullURL + newURL.manufacturer + el.value;
    }));

    console.log(`New Url: ${fullURL}`)
}


