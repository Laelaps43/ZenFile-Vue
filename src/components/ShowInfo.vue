<template>
    <!-- 系统信息 -->
    <div class=" h-full p-6 mx-auto rounded-3xl flex flex-col justify-around" style="background-color: #f9f8f7;">
        <!-- 有关用户 -->
        <div class="">
            <div class="flex items-center pl-2">
                <svg class="icon w-8 h-8" aria-hidden="true" fill="#fcbe32">
                    <use xlink:href="#icon-yonghuxinxi"></use>
                </svg>
                <span class="text-xl">用户信息</span>
            </div>
            <div class="pl-5 h-fit flex flex-col justify-evenly">
                <div class="flex flex-row mt-4 items-center">
                    <svg class="icon w-4 h-4" aria-hidden="true" fill="#00dffc">
                        <use xlink:href="#icon-yonghu"></use>
                    </svg>
                    <span class="pl-1 w-1/3">登录用户</span>
                    <span>Laelaps</span>
                </div>
                <div class="flex flex-row mt-4 items-center">
                    <svg class="icon w-4 h-4" aria-hidden="true" fill="#30cefe">
                        <use xlink:href="#icon-time"></use>
                    </svg>
                    <span class="pl-1 w-1/3">登录时间</span>
                    <span>2023-3-18 18:01:23</span>
                </div>
                <div class="flex flex-row mt-4 items-center">
                    <svg class="icon w-4 h-4" aria-hidden="true" fill="#a8d7f9">
                        <use xlink:href="#icon-time"></use>
                    </svg>
                    <span class="pl-1 w-1/3">上次登录时间</span>
                    <span>2023-3-17 12:00:12</span>
                </div>
                <div class="flex flex-row mt-4 items-center">
                    <svg class="icon w-4 h-4" aria-hidden="true" fill="#fe7c36">
                        <use xlink:href="#icon-suijiyonghu"></use>
                    </svg>
                    <span class="pl-1 w-1/2">是否为临时用户</span>
                    <span>否</span>
                </div>
                <div class="flex flex-row mt-4 items-center">
                    <svg class="icon w-4 h-4" aria-hidden="true" fill="#48bbf4">
                        <use xlink:href="#icon-IP"></use>
                    </svg>
                    <span class="pl-1 w-1/3">登录地点</span>
                    <span>江西（192.168.2.3）</span>
                </div>
            </div>
        </div>
        <!-- 运行监控 -->
        <div class="">
            <div class="flex items-center pl-2">
                <svg class="icon w-8 h-8" aria-hidden="true" fill="#30d6f7">
                    <use xlink:href="#icon-yunhangjiankong"></use>
                </svg>
                <span class="text-xl">系统监控</span>
            </div>
            <div class="pl-5 h-fit flex flex-col justify-evenly">
                <!-- 存储源-->
                <div v-for="item in items" class="storeSource">
                    <div class="flex flex-row mt-4 items-center">
                        <svg v-if="item.source === 'local'" class="icon w-5 h-5" aria-hidden="true" fill="#00dffc">
                            <use xlink:href="#icon-yingpan"></use>
                        </svg>
                        <svg v-if="item.source === 'onedrive'" class="icon w-6 h-6" aria-hidden="true" fill="#0068c0">
                            <use xlink:href="#icon-onedrive"></use>
                        </svg>
                        <svg v-if="item.source === 'google'" class="icon w-5 h-5" aria-hidden="true">
                            <use xlink:href="#icon-google"></use>
                        </svg>
                        <span class="pl-1">{{ item.name }}</span>
                        <span class="pl-3 text-gray-300">(在线)</span>
                    </div>
                    <div class="capaticy mt-2">
                        <el-progress :percentage="item.capaticy" color="#03fb72" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 系统工具 -->
        <div class="">
            <div class="flex items-center pl-2">
                <svg class="icon w-8 h-8" aria-hidden="true" fill="#3595fb">
                    <use xlink:href="#icon-gongju"></use>
                </svg>
                <span class="text-xl">系统工具</span>
            </div>
            <div class="pl-5 grid grid-cols-3">
                <div v-for="item in systems" class="h-20 flex flex-col justify-evenly items-center hover:bg-slate-300">
                    <svg class="icon w-6 h-6" aria-hidden="true" :fill="item.color">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                    <p class="">{{ item.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const items = ref([{ source: 'local', name: '本地存储', online: true, capaticy: 40 },
{ source: 'onedrive', name: 'OneDrive', online: true, capaticy: 80 },
{ source: 'google', name: 'Google Drive', online: true, capaticy: 20 }])

const systems = ref([{ icon: '#icon-shezhi', name: '系统设置', color: '#06c8fd' },
{ icon: '#icon-yanzhengma54', name: '验证码管理', color: '#a26df6' },
{ icon: '#icon-lianjie', name: '短链管理', color:'#09a9cd'},
{ icon: '#icon-suijiyonghu', name: '临时用户管理', color: '#fe7c36'},
{ icon: '#icon-rizhi', name: '日志管理',color:'#0dd1f8' }])
</script>