import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

export const useFetchSchoolMembers = defineStore('fetchSchoolMembers',()=>{
    const state = reactive(
        {
            schoolMembers: []
        }
    )

    function schoolMembersGet(){
        return new Promise((resolve,reject) => {
            axios.get('http://localhost:8888/api/school_members')
            .then((res) => {
                console.log("Ma'lumot olindi")
                state.schoolMembers = res.data
                resolve()
            })
            .catch(() => {
                console.log("Ma'lumot olishda xatolik yuz berdi")
                reject()
            })
        })
    }

    return {schoolMembersGet,state}

})