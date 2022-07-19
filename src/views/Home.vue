<script setup>
import apis from '../api/api'
import { ref } from 'vue'
const tableData = ref([])
const rowStyle = ref({ background: 'rgba(0, 0, 0, 0.2)', color: 'lightblue' })
const headStyle = ref({ background: 'rgba(0, 0, 0, 0.2)', color: 'lightgreen' })
apis.getReportList().then(res => {
    tableData.value = res.data.map(item => {
        return {
            date: item.date.replaceAll('/', ''),
            spm: item.spm,
            label: item.label,
            value: item.value
        }
    })
})
</script>

<template>
    <div class="home-page">
        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" :row-style="rowStyle" :header-row-style="headStyle" :header-cell-style="headStyle" :cell-style="rowStyle">
            <el-table-column prop="date" sortable label="日期" />
            <el-table-column prop="spm" label="页面ID" />
            <el-table-column prop="label" label="页面" />
            <el-table-column prop="value" sortable label="访问量" />
        </el-table>
    </div>
</template>

<style lang="less" scoped>
.home-page {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
.el-table {
    background-color: transparent !important;
}
:deep(.el-table td.el-table__cell), :deep(.el-table th.el-table__cell.is-leaf) {
    border: none !important;
}
:deep(.el-table__inner-wrapper) {
    &::before {
        display: none;
    }
}
</style>