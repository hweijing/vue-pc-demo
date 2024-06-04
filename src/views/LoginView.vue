<template>
    <div class="bg">
        <LoginForm></LoginForm>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
    name: 'LoginView',
    components: {
        LoginForm
    }
}
</script>

<style scoped lang="less">
.bg {
    width: 1920px;
    height: 919px;

    background-image: url(../assets/bglogin.68ca2f48.jpg);
    background-repeat: no-repeat;
    background-position: 0px -80px;
}
</style>