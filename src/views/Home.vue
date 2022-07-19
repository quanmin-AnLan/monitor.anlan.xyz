<script setup>
import apis from '../api/api'
import { ref } from 'vue'
const tableData = ref([])
const rowStyle = ref({ background: 'transparent', color: 'white' })
apis.getReportList().then(res => {
    tableData.value = res.data
})
</script>

<template>
    <div class="home-page">
        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" :row-style="rowStyle" :header-row-style="rowStyle" :header-cell-style="rowStyle" :cell-style="rowStyle">
            <el-table-column prop="date" sortable label="日期" />
            <el-table-column prop="spm" label="页面唯一标识" />
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
:deep(.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf) {
    border: none !important;
}
.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
    border: none !important;
}
</style>