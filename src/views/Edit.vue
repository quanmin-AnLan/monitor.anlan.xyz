<script setup>
import apis from '../api/api'
import { ref, reactive } from 'vue'
const tableData = ref([])
const dialogVisible = ref(false)
const addSpmParam = reactive({
    label: '',
    value: ''
})
apis.getSpmList().then(res => {
    const key = Object.keys(res.data)
    for (let i = 0; i < key.length; i++) {
        tableData.value.push({
            label: key[i],
            value: res.data[key[i]]
        })
    }
})
const confirm = () => {
    apis.addSpmList(addSpmParam).then(res => {
        location.reload()
    })
}
</script>

<template>
    <div class="edit-page">
        <el-button type="success" plain @click="dialogVisible = true">添加</el-button>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="label" label="label" />
            <el-table-column prop="value" label="value" />
        </el-table>
        <el-dialog v-model="dialogVisible" title="添加spm码配置" width="30%">
            <el-input v-model="addSpmParam.label" placeholder="label"></el-input>
            <el-input v-model="addSpmParam.value" placeholder="value"></el-input>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="confirm">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped>
.edit-page {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>