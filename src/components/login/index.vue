<style lang="less">
@gradient-color: #3788ee;
@bg-color: #f7f8fa;
@title-color: #3a3a3a;
@text-color: #7e7e7e;
@placeholder-color: #7e7e7e;

.login-vue {
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: @bg-color;

    .login-container {
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .login-content {
            letter-spacing: 2px;
            background: #FFF;
            padding: 70px 30px 20px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
            border-radius: 3px;
            box-sizing: border-box;

            >div {
                margin: 30px 0;

                &.login-input {
                    position: relative;

                    .placeholder {
                        position: absolute;
                        color: @placeholder-color;
                        top: 6px;
                        font-size: 16px;
                        transition: all .2s;
                        left: 0;
                        pointer-events: none;
                    }

                    input {
                        font-size: 16px;
                        padding: 8px 0;
                        height: 40px;
                        width: 100%;
                        border: none;
                        border-radius: 0;
                        border-bottom: 1px solid #d3d3d3;
                        box-shadow: inset 0 0 0 1000px #fff;
                        outline: none;
                        box-sizing: border-box;
                        transition: .3s;
                        font-weight: 200;

                        &:focus {
                            border-bottom-color: @gradient-color;
                            box-shadow: inset 0 0 0 1000px #fff;
                        }
                    }

                    input:focus+.placeholder,
                    .placeholder.fixed {
                        font-size: 13px;
                        top: -16px;
                    }

                    input:-webkit-autofill+.placeholder {
                        font-size: 13px;
                        top: -16px;
                    }
                }

                &.login-title {
                    font-size: 30px;
                    color: @title-color;
                    line-height: 1;
                    margin: -16px 0px 40px;
                    font-weight: 200;
                }

            }

            >.buttonDiv {
                margin-top: 45px;

                .h-btn {
                    padding: 12px 0;
                    font-size: 18px;
                    opacity: .8;
                    border-radius: 3px;
                    background: @gradient-color;
                    border-color: @gradient-color;

                    &:hover {
                        opacity: 1;
                        background: @gradient-color;
                        border-color: @gradient-color;
                    }
                }
            }
        }

        .copyright {
            letter-spacing: 1px;
            margin-top: 30px;
            color: @text-color;

            a {
                color: @text-color;
            }
        }
    }

    #verifiyImg {
        position: absolute;
        width: 70px;
        right: 0px;
    }
}
</style>

<template>
<div class="login-vue" :style="Bg">
    <div class="login-container">
        <div class="login-content">
            <div class="login-title"><img src="../../images/logoBlue.png" style="display:inline-block;vertical-align: middle;margin-right:20px;" width="60">广源引擎</div>
            <div class="login-name login-input">
                <input type="text" name="loginName" v-model="login.loginName" autocomplete="off" />
                <span class="placeholder" :class="{fixed: login.loginName != '' && login.loginName != null}">用户名</span>
            </div>
            <div class="login-password login-input">
                <input type="password" name="password" v-model="login.passWord" @keyup.enter="submit" autocomplete="off" />
                <span class="placeholder" :class="{fixed: login.passWord != '' && login.passWord != null}">密码</span>
            </div>
            <div class="login-password login-input" style="position:relative">
                <input type="text" name="verifyCode" v-model="login.verifyCode" @keyup.enter="submit" autocomplete="off" />
                <span class="placeholder" :class="{fixed: login.verifyCode != '' && login.verifyCode != null}">验证码</span>
                <img alt="验证码加载失败" id="verifiyImg" :uid="uuid" @click="updataImgCode" :src="src+uuid" />
            </div>
            <div class="buttonDiv">
                <Button :loading="loading" block color="primary" size="l" @click="submit">登录</Button>
            </div>
            <a style="margin-top:10px;">没有账号？</a>
            <a style="margin-top:10px;" href="#/register">去注册</a>
        </div>
        <p style="color:#fff" class="copyright"> Copyright © 2020 鑫传媒 广源引擎 - <a href="" style="color:#fff">广告投放系统</a></p>
    </div>
</div>
</template>

<script>
import md5 from 'js-md5';
import Login from 'model/login/Login';
import store from 'js/vuex/store.js';
export default {
    data() {
        return {
            Bg: {
                backgroundImage: 'url(http://news.zizhengjiankang.com/sspBg/sspBg_1.jpg)',
                backgroundSize:"100% 100%",
                backgroundRepeat:"no-repeat",
            },
            login: Login.parse({}),
            loading: false,
            uuid: this.uid(),
            src: G.get("env").apiDomin + "/pub/verify/code.do?id=",
        };
    },
    mounted() {},
    methods: {
        uid() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
                c
            ) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        },
        updataImgCode() {
            this.src = G.get("env").apiDomin + "/pub/verify/code.do?t=" + (+new Date()) + "&id="
            this.login.verifyCode = "";
        },
        submit() {
            let data = Login.dispose(this.login);
            data.passWord = md5(data.passWord);
            data.id = this.uuid;
            this.loading = true;
            R.Login.login(data).then(resp => {
                if (resp.ok) {
                    let userInfo = {
                        ...resp.data
                    };
                    Utils.saveCookie('token', resp.data.token);
                    resp.data.avatar = require('../../images/avatar.png');
                    Utils.saveCookie('userInfo', resp.data);
                    G.set('account', {
                        ...resp.data
                    });
                    store.dispatch('updateAccount', {
                        ...resp.data
                    });
                    this.$router.replace("/");
                } else {
                    Utils.clearCookie();
                    this.login.verifyCode = "";
                    document.getElementById("verifiyImg").src = G.get("env").apiDomin +
                        "/pub/verify/code.do?t=" +
                        +new Date() +
                        "&id=" +
                        this.uuid;
                }
                this.loading = false;
            });
        }
    }
};
</script>
