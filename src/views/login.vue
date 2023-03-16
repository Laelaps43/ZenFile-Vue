<template>
    <div class="w-4/5 m-auto flex-col">
        <img src="../../public/icon.png" alt="" class="w-1/2 m-auto">
        <div class="w-1/2 m-auto">
        <el-form class="w-1/2 m-auto" 
                label-position="top" 
                label-width="8rem" 
                :model="form"
                :rules="rules"
                ref="ruleFormRef"
                >
            <el-form-item label="用户名" prop="name">
                <el-input  placeholder="请输入帐号" class="" size="large" v-model="form.name"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" type="password"  show-password size="large" v-model="form.password"/>
            </el-form-item>
            <!-- <el-form-item label="Activity form" class="w-4/5">
                <el-input />
            </el-form-item> -->
            <el-form-item>
                <el-button class="w-full h-10 mt-4" size="large" color="#22c7da" @click="onSumbit(ruleFormRef)">登录</el-button>
            </el-form-item>
        </el-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref, h } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'


// const formSize = ref('default')
const ruleFormRef =ref<FormInstance>()

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入帐号', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})


const form = reactive({
    name: '',
    password: '',
})

const onSumbit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>