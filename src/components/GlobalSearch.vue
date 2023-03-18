<template>
    <div class="w-1/3 h-auto max-h-full bg-white mt-28 m-auto p-10 rounded-xl">
        <div class="m-auto max-h-full">
            <div class="flex items-center">
                <el-select v-model="toSearch.Source">
                    <el-option label="r" value="1"/>
                    <el-option label="s" value="2"/>
                    <el-option label="t" value="3"/>
                </el-select>
                <div class="ml-4 text-gray-200">选择存储源（默认为全局搜索）</div>
            </div>
            <div class="">
                <input v-model="toSearch.InputName" type="text"
                    class="w-full h-14 text-xl leading-none border-b-4 focus:border-primary focus:ring-0 outline-none">
            </div>
            <div v-for="item in items" class="w-full h-14 bg-gray-200  mt-2 rounded-md">
                {{ item.message }}
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref,reactive, watch } from 'vue'
const items = ref([{ message: 'Foo' }, { message: 'Bar' }, { message: 'Bar' }, { message: 'Bar' }, { message: 'Bar' }
    , { message: 'Bar' }, { message: 'Bar' }, { message: 'Bar' }, { message: 'Bar' }, { message: 'Bar' }])

// 搜索结果
const toSearch = reactive({
    Source: '1',
    InputName: '',
});

watch(
    ()=>toSearch,
    () => {
        console.log(toSearch.Source + " " + toSearch.InputName);
    },
    {
        deep : 'true'
    }
)
</script>