import {creatApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const url = 'https://vue3-course-api.hexschool.io/v2/';
const path = 'sheng-apitest';

const app = createApp({
    data(){
        return{
            temp:{},
            products:[],
        }
    },
    mounted(){
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)hexschoolToken\s*\=\s*([^;]*).*$)|^.*$/,
            '$1',
        );
        console.log(token);
        const api = `${url}api/${path}/admin/products/all`;
        console.log(api)
    }
})

app.mount('#app');