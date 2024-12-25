import { defineStore } from "pinia";
import axios from "axios";

axios.interceptors.request.use((config)=>{
    config.headers = {}
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')

    return config
})

export const useSchoolMember = defineStore('school_member',() =>{
    function schoolMemberCreate(data){
        return new Promise((resolve,reject) => {
            axios.post('http://localhost:8888/api/school_members',data)
                .then((response) => {
                    console.log('SchoolMember yaratildi')
                    resolve(response)
                })
                .catch((error) => {
                    console.log('SchoolMember yaratishda xatolik yuz berdi')
                    reject(error)
                })
        })
    }

    return {schoolMemberCreate}
})