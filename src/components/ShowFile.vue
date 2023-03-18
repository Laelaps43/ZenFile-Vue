<template>
    <div class="w-full h-full max-h-full relative overflow-y-hidden pb-5">
        <div class="choiceSource absolute w-full h-10 bg-slate-200 flex flex-row pl-6 items-center">
            <div class="w-auto h-full ml-2">
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane v-for="item in items" :label="item.source"></el-tab-pane>
                </el-tabs>
            </div>
            <button class="hover:bg-slate-100 ml-8 w-20 h-full">
                <svg class="icon w-5  h-5 mx-auto" aria-hidden="true" fill="#3595fb">
                                <use xlink:href="#icon-add"></use>
                            </svg>
            </button>
        </div>

        <div class="fileAreaw h-full w-full overflow-y-auto absolute top-10 p-4 mb-4">

            <!-- 文件头区域 -->
            <div class="fileheader w-full h-8 border-b-2 border-gray-400">
                <div class="grid grid-cols-12 gap-2">
                    <div class="selectAndicon w-full h-full">
                        <div class="flex flex-row items-center">
                            <el-checkbox class="mx-2" style="margin-right: 0;"></el-checkbox>
                            <svg class="icon w-12 h-5 mx-auto" aria-hidden="true" fill="#52c8e9">
                                <use xlink:href="#icon-wenjian"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="fileName mx-auto">文件名</div>
                    <div class="operate col-span-8"></div>
                    <div class="filedate mx-auto">创建时间</div>
                    <div class="fileSize mx-auto">文件大小</div>
                </div>
            </div>
            <!-- 文件区域 -->
            <div v-for="i in 20" class="filed h-16  w-full border-b border-gray-50 hover:bg-blue-300">
                <div class="grid grid-cols-12 gap-2">
                    <div class="selectAndicon w-full h-full">
                        <div class="flex flex-row items-center">
                            <el-checkbox class="mx-2" style="margin-right: 0;"></el-checkbox>
                            <svg class="icon w-24 h-16" aria-hidden="true" fill="#ffc237">
                                <use xlink:href="#icon-weibiaoti-_huabanfuben"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="fileName m-auto">Laelaps</div>
                    <div class="operate m-auto col-span-8"></div>
                    <div class="filedate m-auto">2020-1-10</div>
                    <div class="fileSize m-auto">1000MB</div>
                </div>
            </div>
            <!-- 解决最后可能只有半行问题 -->
            <div class="h-16 w-full"></div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const items = ref([{ source: "本地存储" }, { source: "onedirve" }, { source: "Google Drive" }])
</script>


<style setup>
.el-checkbox:last-of-type{
    margin-right: none;
}
</style>