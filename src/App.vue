<template>
  <div id="app">
    <div class="list">
      <div style="display: flex; flex-direction: column; margin-bottom: 40px">
        <img style="margin-bottom: 24px" src="./assets/abt.png" />
        <p>保险核心业务后台管理系统</p>
      </div>
      <div>
        <ul>
          <li>
            <Input placeholder="请输入用户名">
              <Icon type="md-contact" slot="prefix" />
            </Input>
          </li>
          <li>
            <Input type="password" placeholder="请输入密码">
              <Icon type="md-lock" slot="prefix" />
            </Input>
          </li>
          <li>
            <div style="display: flex; height: 32px">
              <Input
                placeholder="请输入验证码"
                style="margin-right: 20px; flex: 1"
              >
                <Icon type="ios-images-outline" slot="prefix" />
              </Input>
              <img
                style="width: 100px; height: 32px"
                src="./assets/captcha.png"
              />
            </div>
          </li>
          <li>
            <div style="display: flex">
              <Input placeholder="请输入手机验证码" style="margin-right: 20px">
                <Icon type="ios-chatboxes-outline" slot="prefix" />
              </Input>
              <Button>获取验证码</Button>
            </div>
          </li>
          <li>
            <Button style="width: 100%" to="/home" type="primary">登录</Button>
          </li>
        </ul>
      </div>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0;
  padding: 0;
  background-image: url(../src/assets/bglogin.68ca2f48.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.list {
  width: 15%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 22%;
  right: 22%;
}

ul > li {
  margin-bottom: 24px;
  list-style-type: none;
}
</style>
