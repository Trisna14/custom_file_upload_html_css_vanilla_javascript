const input = document.getElementsByName('input')[0];
const btn_input = document.getElementById('btn-input');
const output = document.getElementById('output-input');

btn_input.addEventListener ('click', (e) => {

    input.click();

    input.addEventListener ('change', (e) => {

        console.log(input.files[0].name);
        const nama = input.files[0].name;

        const nama_2 = nama.replace('.',' ');
        const nama_3 = nama_2.replace('jpg',' ');

        console.log(nama_3);
        output.innerHTML = nama_3;
    });

});