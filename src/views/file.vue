<template>
    <div class="common-layout" :class="{ 'isGlobalSearch': globalSearch }">
        <el-container class="w-screen h-screen lae-container pb-2">
            <Header></Header>
            <el-main class="lae-el-main h-full">
               <FileAndInfo/> 
            </el-main>
        </el-container>
    </div>
    <div class="absolute inset-0 w-screen h-screen min-h-full lae-global" 
        :class="{'lae-globalActive': globalSearch}"
        @click.self="isAcitiveGlobalSearch">
        <GlobalSearch/>
    </div>
    <!-- <div class="lae-global h-20 w-20 bg-slate-400 fixed" :class="{ 'lae-globalActive': globalSearch }"> -->
    <!-- </div> -->
</template>

<script setup>
import Header from '../components/Header.vue'
import { storeToRefs } from 'pinia'
import { useGlobalConfig } from '../stores/global'
import GlobalSearch from '../components/GlobalSearch.vue';
import  FileAndInfo from '../components/FileAndInfo.vue' 
const globalConfig = useGlobalConfig()
const { globalSearch } = storeToRefs(globalConfig)
const {isAcitiveGlobalSearch} = useGlobalConfig()
</script>

<style scoped>
.lae-el-main {
    padding: 0;
    margin: 0;
}

.lae-container {
    @apply flex-col
}



.lae-global {
    display: none;
}

.lae-globalActive {
    z-index: 100;
    display: block;
    background-color: rgba(0,0,0,.25);
}
</style>