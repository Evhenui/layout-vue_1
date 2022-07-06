<template>
  <div class="header">
    <div class="header__body">
      <a href="#" class="header__link">
        <img
          class="header__link-img"
          src="../assets/logo.png"
          alt="logo-header"
          width="120"
          height="23"
        />
      </a>
      <div class="header__wrapper-burger">
        <div
          class="header__burger"
          @click="active = !active"
          :class="active ? 'activeBurger' : ''"
        >
          <span></span>
        </div>
      </div>
      <nav class="header__menu" :class="{ active }">
        <ul class="header__menu-list">
          <li
            class="header__menu-item"
            v-for="(item, index) in $store.state.headerMenu"
            :key="index"
          >
            {{ item.logoName }}
          </li>
          <div class="header__wrapper-burger__footer-menu">
            <button
              class="button-all header__button menu-footer-btn-top"
              @click="modalRegisterOpen"
            >
              {{ buttonHeaderName }}
            </button>
            <button
              class="button-all header__button menu-footer-btn-button"
              @click="modalLoginOpen"
            >
              {{ stayPartnerButton }}
            </button>
          </div>
        </ul>
      </nav>
      <button class="button-all header__button" @click="modalRegisterOpen">
        {{ buttonHeaderName }}
      </button>
    </div>
    <transition name="modal">
      <Login v-if="SHOW_MODAL.modalLogin" @close="modalLoginClose" />
    </transition>
    <transition name="modal">
      <Register v-if="SHOW_MODAL.modalRegister" @close="modalRegisterClose" />
    </transition>
  </div>
</template>

<script>
import Register from "./Popup/Register.vue";
import Login from "./Popup/Login.vue";
import Popup from "./Popup/Popup.vue";

import { mapGetters, mapMutations } from "vuex";
export default {
  name: "HeaderApp",
  components: { Popup, Register, Login },
  data() {
    return {
      active: false
    };
  },
  computed: {...mapGetters(['buttonHeaderName', 'stayPartnerButton', 'SHOW_MODAL'])},
  methods: {
    ...mapMutations(['modalRegisterClose', 'modalRegisterOpen', 'modalLoginClose', 'modalLoginOpen']),
  }
};
</script>

<style lang="scss">
.header__wrapper-burger__footer-menu {
  display: none;
}
.header {
  .popup-partner {
    display: block;
  }
  .header__button {
    position: relative;
    z-index: 2;
  }
  padding: 2vh 9.37vw;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0 1px 8px rgb(83 109 122 / 29%);
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 2;
  }
  .header__body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .header__link {
    flex: 0 0 120px;
    overflow: hidden;
    font-size: 0;
    position: relative;
    z-index: 3;
    & > img {
      max-width: 100%;
      display: block;
    }
  }
  .header__menu-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    column-gap: 2.77vw;
    .header__menu-item {
      &:nth-child(1) {
        min-width: 140px;
      }
      font-family: "GT Eesti Pro Display";
      font-size: 1.125rem;
      color: #72727e;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: #446df6;
        cursor: pointer;
      }
    }
  }
  &__button {
    background: white;
    color: #446df6;
    &:hover {
      border: 1px solid #446df6;
    }
  }
}
.header__burger,
.menu-footer-btn {
  display: none;
}
.header__wrapper-burger {
  display: none;
}
@media (max-width: 1250.98px) {
  .header {
    padding: 2vh 2.37vw;
  }
}

@media (max-width: 991.98px) {
  .header {
    .header__button {
      padding: 20px 10px;
    }
  }
}

@media (max-width: 767.98px) {
  .header__button {
    display: none;
  }
  .header {
    padding: 5vh 4.37vw;
    .popup-register-mobile {
      top: 20%;
      left: 0;
      transform: translate(0%, 0%);
    }
    .header-popup {
      top: 20%;
      left: 0;
      transform: translate(0%, 0%);
      main > h1 {
        text-align: center;
      }
    }
    &::before {
      border-bottom: solid #e9ecf5;
    }
    .header__body {
      justify-content: space-between;
    }
    .header__burger {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      display: block;
      position: relative;
      width: 30px;
      height: 30px;
      z-index: 3;
      &:hover {
        cursor: pointer;
      }
      &::before,
      &::after {
        content: "";
        background-color: #72727e;
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        transition: all 0.3s;
      }
      &::before {
        top: 3px;
      }
      &::after {
        bottom: 3px;
      }
      & > span {
        position: absolute;
        background-color: #72727e;
        left: 0;
        width: 100%;
        height: 2px;
        top: 14px;
        transition: all 0.5s;
      }
    }
    .header__menu {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      max-height: 18%;
      background-color: #fff;
      padding: 0px 0px 0px 0px;
      transition: all 0.6s;
    }
    .header__menu-list {
      position: absolute;
      width: 100%;
      background: #fff;
      flex-wrap: nowrap;
      flex-direction: column;
      text-align: center;
      justify-content: space-between;
      .header__menu-item {
        margin: 0;
        padding: 30px 0 30px 0;
        background: #fff;
        border-bottom: solid #e9ecf5;
      }
    }
    .active {
      z-index: 0;
      top: 102px;
    }
    .activeBurger {
      & > span {
        transform: scale(0);
      }
      &::before {
        transform: rotate(45deg);
        top: 15px;
      }
      &::after {
        transform: rotate(-45deg);
        bottom: 13px;
      }
    }
  }
  .header__wrapper-burger {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    display: block;
    position: relative;
    z-index: 2;
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 50px;
      left: -5vw;
      top: -1vh;
      border-left: 2px solid #e9ecf5;
    }
  }
  .header__wrapper-burger__footer-menu {
    display: block;
    width: 100%;
    position: relative;
    padding: 10% 0 10% 0;
    border-bottom: 2px solid #e9ecf5;
    .menu-footer-btn-top,
    .menu-footer-btn-button {
      margin: 0 auto;
      display: block;
      background: #446df6;
      color: #eeeeee;
    }
    .menu-footer-btn-top {
      margin-bottom: 24px;
    }
    .menu-footer-btn-button {
      background: #eeeeee;
      color: #446df6;
    }
  }
}

@media (max-width: 430px) {
  .header {
    padding: 5vh 4.37vw;
  }
}
</style>
