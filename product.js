import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const url = 'https://vue3-course-api.hexschool.io/v2/';
const path = 'sheng-apitest';

const app = createApp({
    data(){
        return{
            tempProduct:{},
            products:[],
            }
    },
    methods:{
        getData(){
            const api = `${url}api/${path}/admin/products/all`;
            axios.get(api)
        .then(res=>{
            console.log(res)
            this.products = res.data.products
        })
        }
    },
    mounted(){
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)hexschoolToken\s*\=\s*([^;]*).*$)|^.*$/,
            '$1',
        );
        console.log(token);
        axios.defaults.headers.common['Authorization'] = token;
        
        this.getData()
    }
})

app.mount('#app');