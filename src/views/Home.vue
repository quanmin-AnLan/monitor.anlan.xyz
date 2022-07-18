<script setup>
import apis from '../api/api'
apis.getReportList().then(res => {
    console.log(res)
})
</script>

<template>
    <div>
        home
    </div>
</template>