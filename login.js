
import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const url = 'https://vue3-course-api.hexschool.io/v2';



const app = createApp({
    data(){
        return{
            text='1234'
        }
    },
    mounted(){
        console.log(this.text)
    }
})

app.mount('#app')