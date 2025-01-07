import { defineStore } from "pinia";
import axios from "axios";


axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }
    return config
})

export const useNews = defineStore('new',() =>{
    function newsCreate(data){
        return new Promise((resolve,reject) => {
            axios.post('http://localhost:8888/api/news',data)
                .then((response) => {
                    console.log('News yaratildi')
                    resolve(response)
                })
                .catch((error) => {
                    console.log('News yaratishda xatolik yuz berdi')
                    reject(error)
                })
        })
    }

    return {newsCreate}
})