<template>
    <el-container class="h-full">
        <el-main class="lae-el-main">
           <ShowFile/> 
        </el-main>
        <el-aside class=" lae-aside">
           <ShowInfo></ShowInfo> 
        </el-aside>
    </el-container>
</template>

<script setup>

import ShowFile from './ShowFile.vue';
import ShowInfo from './ShowInfo.vue';
</script>

<style>
.lae-el-main {
    padding: 0;
    margin: 0;
}

.lae-aside {
    @apply w-1/5;
}
</style>