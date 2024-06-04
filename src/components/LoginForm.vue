<template>
    <div class="layer">
        <div class="loginForm">
            <div class="header">
                <img src="../assets/abt.png">
                <p>保险核心业务后台管理系统</p>
            </div>
            <div class="content">
                <Form ref="form" :model="form" :rules="rules">
                    <FormItem prop="userName">
                        <Input type="text" v-model="form.userName" placeholder="请输入用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="form.password" placeholder="请输入密码">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="checkCode">
                        <div class="flex">
                            <Input style="margin-right: 10px;" type="number" v-model="form.checkCode"
                                placeholder="请输入验证码">
                            <Icon type="ios-images-outline" slot="prepend"></Icon>
                            </Input>
                            <img style="height: 32px" src="../assets/captcha.png" alt="">
                        </div>
                    </FormItem>
                    <FormItem prop="phoneCheckCode">
                        <div class="flex">
                            <Input style="margin-right: 10px;" type="number" v-model="form.phoneCheckCode"
                                placeholder="请输入手机验证码">
                            <Icon type="ios-tablet-portrait" slot="prepend"></Icon>
                            </Input>
                            <Button>获取验证码</Button>
                        </div>
                    </FormItem>
                    <FormItem>
                        <Button long type="primary" @click="handleSubmit('form')">登录</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        const validateUserName = (rule, value, callback) => {
            if (value === 'CESHI001') {
                callback();
            } else {
                callback(new Error('用户名错误'));
            }
        };

        const validatePassword = (rule, value, callback) => {
            if (value === '1qazXSW@') {
                callback();
            } else {
                callback(new Error('密码错误'));
            }
        };

        const validateCheckCode = (rule, value, callback) => {
            if (value === '7062') {
                callback();
            } else {
                callback(new Error('验证码错误'));
            }
        };

        const validatePhoneCheckCode = (rule, value, callback) => {
            if (value === '9999') {
                callback();
            } else {
                callback(new Error('手机验证码错误'));
            }
        };

        return {
            form: {
                userName: '',
                password: '',
                checkCode: '',
                phoneCheckCode: ''
            },
            rules: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { validator: validateUserName, trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { validator: validatePassword, trigger: 'blur' }
                ],
                checkCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { validator: validateCheckCode, trigger: 'blur' }
                ],
                phoneCheckCode: [
                    { required: true, message: '请输入手机验证码', trigger: 'blur' },
                    { validator: validatePhoneCheckCode, trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        handleSubmit(form) {
            console.log(this.$refs);
            
            this.$refs[form].validate((valid) => {
                console.log(valid);
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
}

.layer {
    width: 1920px;
    height: 919px;
    position: relative;

    .loginForm {
        width: 300px;
        height: 450px;
        position: absolute;
        top: 200px;
        right: 410px;

        .header {
            .flex;
            width: 300px;
            height: 200px;
            margin-bottom: 20px;
            flex-direction: column;

            img {
                height: 180px;
            }

            p {
                flex: 1;
            }
        }
    }
}
</style>