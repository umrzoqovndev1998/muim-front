import { defineStore } from "pinia";
import axios from "axios";

export const useAuthorization = defineStore('authorization', () => {
    function adminAuth(data) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:8888/api/admins/auth',data)
                .then((res) => {
                    // console.log("Token olindi!");
                    localStorage.setItem('token', res.data.token)
                    resolve(res.data)
                })
                .catch((error) => {
                    // console.error("Token olinmadi:", error.message);
                    reject(error);
                })
        })
    }

    return { adminAuth }
});
