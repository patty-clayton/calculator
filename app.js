//patty calculator v2 - stripped down
let arrayElements = document.querySelectorAll('button');
for (let element of arrayElements) {
    element.addEventListener('click', () => {
        sum.textContent = Number(entry1.value) + Number(entry2.value);
        difference.textContent = Number(entry3.value) - Number(entry4.value);
        product.textContent = Number(entry5.value) * Number(entry6.value);
        quotient.textContent = Number(entry7.value) / Number(entry8.value);
    })
}