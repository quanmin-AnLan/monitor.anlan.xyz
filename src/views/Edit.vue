<script setup>
import apis from '../api/api'
apis.getSpmList().then(res => {
    console.log(res)
})
</script>
<template>
    <div>
        edit
    </div>
</template>