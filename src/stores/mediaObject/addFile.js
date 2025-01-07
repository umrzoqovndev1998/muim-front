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

export const useAddFile = defineStore('add-file',() =>{
    function addFile(data){
        let file = new FormData()
        file.append('file',data)

        return new Promise((resolve,reject) => {
            axios.post('http://localhost:8888/api/media_objects',file)
                .then((response) => {
                    console.log('File yuklandi')
                    resolve(response)
                })
                .catch((error) => {
                    console.log('File yuklashda xatolik yuz berdi')
                    reject(error)
                })
        })
    }

    return {addFile}
})