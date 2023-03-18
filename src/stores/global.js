import { defineStore } from 'pinia'
import {ref} from 'vue' 

export const useGlobalConfig = defineStore("globalConfig", ()=>{

    const globalSearch = ref(false)

    function isAcitiveGlobalSearch(){
        console.log("this is " + globalSearch.value);
        globalSearch.value = !globalSearch.value
    }
    
    return {globalSearch, isAcitiveGlobalSearch}
})