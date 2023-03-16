<template>
  <el-container class="h-screen w-screen bg-fixed bg-no-repeat bg-cover"
    style="background-image: url('../../public/backgroud.png')">
    <el-header class=" flex justify-between w-4/5 mt-10 mx-auto items-center">
      <img src="../../public/icon.png" class="w-36 h-24" alt="" srcset="">
      <el-button color="rgb(32, 148, 207)" size="large" @Click="doLogin">Login</el-button>
    </el-header>
    <el-main class="h-full">
        <!-- TODO -->
    </el-main>
  </el-container>
</template>

<script setup>

import {useRoute, useRouter} from 'vue-router'
import router from '../router/index.js'

  const doLogin = () => router.push("/login")

</script>