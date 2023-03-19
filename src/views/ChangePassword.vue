<template>
    <div class="common-layout w-screen h-screen">
        <Header />
        <div class="w-3/5 mt-12 h-1/2 mx-auto rounded-lg" style="background-color: #edf0f3;">
            <div class="h-1/4 w-4/5 pt-7 mx-auto align-middle flex  items-center">
                <svg class="icon w-8 h-8" aria-hidden="true">
                    <use xlink:href="#icon-mima"></use>
                </svg>
                <span class="pl-2 text-2xl">修改密码</span>
            </div>
            <div class="w-3/5 h-auto mx-auto ">
                <el-form v-model="password" label-position="top" size="large" :model="password" :rules="rules"
                    ref="ruleFormRef">
                    <el-form-item label="原密码" prop="origin">
                        <el-input v-model="password.origin" type="password"/>
                    </el-form-item>
                    <el-form-item label="更改密码" prop="pass">
                        <el-input v-model="password.pass" type="password"/>
                    </el-form-item>
                    <el-form-item label="请再次输入密码" prop="againpass">
                        <el-input v-model="password.againpass" type="password"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="w-full h-10 mt-4" size="large" color="#22c7da" :loading="loading"
                            @click="onSubmit(ruleFormRef)">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-dialog v-model="dialogVisible" title="确认" width="30%">
                <span>是否要修改密码</span>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogVisible = false; loading=false">取消</el-button>
                        <el-button type="primary"  @click="sumbitForm">
                            确定
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Header from '../components/Header.vue';
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules} from 'element-plus'
import { ElMessage } from 'element-plus'

const loading = ref(false)

const password = reactive({
    origin: '',
    pass: '',
    againpass: '',
})

const ruleFormRef = ref<FormInstance>()

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        if (password.againpass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('againpass', () => null)
        }
        if (value.length < 2) {
            callback(new Error("密码长度要大于8位"))
        }
        callback()
    }
}
const checkOriginPass = (rule: any, value: any, callback, any) => {
    if (value === '')
        callback(new Error('请输入原密码'))
    else
        callback()
}

const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== password.pass) {
        callback(new Error("两个输入的密码不匹配"))
    } else {
        callback()
    }
}

const rules = reactive<FormRules>({
    origin: [
        {
            validator: checkOriginPass,
            trigger: 'blur',
        }
    ],
    pass: [
        {
            validator: validatePass,
            trigger: 'blur',
        },
    ],
    againpass: [
        {
            validator: validatePass2,
            trigger: 'blur',
        }
    ]
})

const dialogVisible = ref(false)

const errorPass = () =>{
        ElMessage.error('错误，输入的密码为空或者输入的密码不一致')
}
const onSubmit = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            loading.value = true
            dialogVisible.value = true
            console.log('submit!')
        } else {
            console.log('error submit!')
            errorPass()
            return false
        }
    })
}


const sumbitForm = ()=>{
    dialogVisible.value = false;
    console.log("发送请求");
    ElMessage({
    message: '修改密码成功，请重新登录',
    type: 'success',
  })
  loading.value = false
}
</script>