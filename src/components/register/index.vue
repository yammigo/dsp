<style lang="less">
@gradient-color: #3788ee;
@bg-color: #f7f8fa;
@title-color: #3a3a3a;
@text-color: #7e7e7e;
@placeholder-color: #7e7e7e;

.register-vue {
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: @bg-color;

    .register-container {
        width: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .register-content {
            letter-spacing: 2px;
            background: #FFF;
            padding: 70px 30px 20px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
            border-radius: 3px;
            box-sizing: border-box;

            >div {
                margin: 30px 0;

                &.register-input {
                    position: relative;
                    width: 50%;
                    float: left;

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

                &.register-title {
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
<div class="register-vue" :style="Bg">
    <div class="register-container">

        <div class="register-content">
            <div class="register-title">注册</div>
            <div class="register-input">
                <input type="text" name="loginName" v-model="register.loginName" @keyup.enter="submit" autocomplete="off" />
                <span class="placeholder" :class="{fixed: register.loginName != '' && register.loginName != null}">用户名</span>
            </div>

            <div class="register-input">
                <input type="password" name="passWord" v-model="register.passWord" @keyup.enter="submit" autocomplete="off" />
                <span class="placeholder" :class="{fixed: register.passWord != '' && register.passWord != null}">密码</span>
            </div>
            <div class="register-input">
                <input type="text" name="userName" v-model="register.userName" @keyup.enter="submit" autocomplete="off" />
                <span class="placeholder" :class="{fixed: register.userName != '' && register.userName != null}">联系人/公司</span>
            </div>
            <div class="register-input">
                <input type="text" name="email" v-model="register.email" @keyup.enter="submit" autocomplete="off" />
                <span class="placeholder" :class="{fixed: register.email != '' && register.email != null}">联系人邮箱</span>
            </div>
            <div class="register-input">
                <input type="text" name="mobile" v-model="register.mobile" @keyup.enter="submit" autocomplete="off" />
                <span class="placeholder" :class="{fixed: register.mobile != '' && register.mobile != null}">手机号</span>
            </div>
            <div class="register-input" style="position:relative">
                <input type="text" name="verificationCode" v-model="register.verificationCode" @keyup.enter="submit" autocomplete="off" />
                <span class="placeholder" :class="{fixed: register.verificationCode != '' && register.verificationCode != null}">验证码</span>
                <div style="position:absolute;top:0px;right:0px;z-index:10"><button class="h-btn h-btn-blue" @click="getSMScode">{{smsText}}</button></div>
            </div>
            <div class="buttonDiv">
                <Button :loading="loading" block color="primary" size="l" @click="submit">注册</Button>

            </div>
            <a style="margin-top:10px;">已有账号？</a>
            <a style="margin-top:10px;" href="#/login">去登录</a>
        </div>
        <p style="color:#fff" class="copyright">Copyright © 2020 鑫传媒 广源引擎 - <a href="" style="color:#fff">广告投放系统</a></p>
    </div>
</div>
</template>

<script>
import md5 from 'js-md5';
// import Login from 'model/login/Login';
// import store from 'js/vuex/store.js';
export default {
    name: 'Register',
    data() {
        return {
            Bg: {
                backgroundImage: 'url(http://news.zizhengjiankang.com/sspBg/sspBg_1.jpg)',
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            },
            register: {},
            loading: false,
            smsText: "获取验证码",
            lockSMS: true,
            timerDown: 60,
            Timer: "",
        };
    },
    beforeDestroy() {
        clearInterval(this.Timer);
        this.Timer = null;
    },
    mounted() {},
    methods: {
        //获取短信验证码
        getSMScode() {
            if (this.lockSMS && this.register.hasOwnProperty('mobile') && this.register['mobile'] !== "") {
                this.smsText = "发送中..";

                R.Register.getSMS({
                    mobile: this.register.mobile
                }).then(res => {
                    if (res.ok) {
                        this.setTimeSMS();
                    }
                })

            } else {
                this.$Message.error('请先填写手机号');
            }
        },
        //短信验证码定时器
        setTimeSMS() {
            this.lockSMS = false;
            this.timerDown = 60;
            this.smsText = "60s 已发送";
            this.Timer = setInterval(() => {
                this.timerDown -= 1;
                this.smsText = this.timerDown + "s 后重发";
                if (this.timerDown <= 0) {
                    clearInterval(this.Timer);
                    this.lockSMS = true;
                    this.timerDown = null;
                    this.smsText = "获取验证码";
                }
            }, 1000);
        },
        submit() {
            let data = {
                ...this.register
            };
            data.passWord && (data.passWord = md5(data.passWord));
            R.Register.addUser(data).then(res => {
                if (res.ok) {
                    this.$Confirm('您的账号正在审核中....', '注册成功').then(() => {
                        this.$router.push({
                            name: 'Login'
                        });
                    })
                }
            })
        }

    }
};
</script>
