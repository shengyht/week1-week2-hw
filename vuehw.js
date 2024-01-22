
const url = 'https://vue3-course-api.hexschool.io/v2';
const path = 'sheng-apitest';

const btn = document.querySelector('.btn');
const emailInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');



btn.addEventListener('click',login);
function login(){
    const username = emailInput.value;
    const password = passwordInput.value;

    const user = {
        username,
        password
    }

    axios.post(`${url}/admin/signin`,user)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err)
    })

};
