<template>
    <el-header class="w-full h-10 flex items-center pt-2" style="background-color: #edf0f3;">
        <div class="logo h-full w-1/3 ml-9">
            <img src="../../public/icon.png" alt="" srcset="" class="max-h-full w-auto">
        </div>
        <div class="search w-1/3 h-full flex">
            <button class="border-gray-300 border-2 hover:border-primary w-1/2 h-2/3 m-auto rounded-full flex items-center" @click="isAcitiveGlobalSearch">
                <svg class="icon w-1/2 h-2/3" aria-hidden="true">
                    <use xlink:href="#icon-icon-test"></use>
                </svg>
                <span class="w1/2 h2/3">搜索文件</span>
            </button>
        </div>
        <div class="operate w-1/3 flex flex-row-reverse mr-9 items-center">
            <div class="block mt-2 relative" 
            @mousemove="mouseMove" @mouseleave="mouseLeave">
                <el-avatar :size="50" fit="true" />
                <div class="w-24 h-32 absolute top-13 z-10 -right-3 rounded-lg" :class="{'InfoMenu': visable}" style="background-color: #edf0f3;">
                <div class="h-10 w-full text-center  border-b-2 items-center hover:bg-cyan-50"><span class="align-middle my-auto">修改密码</span></div>
                <div class="h-10 w-full text-center  border-b-2 items-center hover:bg-cyan-50"><span class="align-middle my-auto">注销</span></div>
                </div>
            </div>
        </div>
    </el-header>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { Search } from '@element-plus/icons-vue'
import { useGlobalConfig } from '../stores/global'
import {ref} from 'vue'
const globalConfig = useGlobalConfig()
const { globalSearch } = storeToRefs(globalConfig)
const { isAcitiveGlobalSearch } = globalConfig

const visable = ref(true)
const mouseMove = ()=>{
    visable.value = false
}

const mouseLeave = ()=>{
    visable.value = true
}
</script>

<style scoped>
.InfoMenu{
    display: none;
}
</style>
