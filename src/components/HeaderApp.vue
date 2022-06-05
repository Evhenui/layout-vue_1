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
              @click="popupMenuRegister"
            >
              {{ buttonHeaderName }}
            </button>
            <button
              class="button-all header__button menu-footer-btn-button"
              @click="popupMenu"
            >
              {{ stayPartnerButton }}
            </button>
          </div>
        </ul>
      </nav>
      <button class="button-all header__button" @click="popupMenuRegister">
        {{ buttonHeaderName }}
      </button>
    </div>
    <PopupMenuRegister
      class="popup-register popup-register-mobile"
      :style="{ display: menuRegister }"
      @popupClose="popupMenuRegister"
    />
    <PopupMenu
      class="popup-partner header-popup"
      :style="{ display: popMenu }"
      @popupClose="popupMenu"
    ></PopupMenu>
  </div>
</template>

<script>
import PopupMenuRegister from "./componentsMain/PopupMenuRegister.vue";
import PopupMenu from "./componentsMain/PopupMenu.vue";
export default {
  name: "HeaderApp",
  components: { PopupMenuRegister, PopupMenu },
  data() {
    return {
      active: false,
      menuRegister: "none",
      popMenu: "none",
    };
  },
  computed: {
    buttonHeaderName() {
      return this.$store.getters.buttonHeaderName;
    },
    stayPartnerButton() {
      return this.$store.getters.stayPartnerButton;
    },
  },
  methods: {
    popupMenuRegister() {
      if (this.menuRegister === "block") {
        this.menuRegister = "none";
      } else {
        this.menuRegister = "block";
      }
    },
    popupCloseI() {
      if (this.menuRegister === "block") {
        this.menuRegister = "none";
      } else {
        this.menuRegister = "block";
      }
    },
    popupMenu() {
      if (this.popMenu === "block") {
        this.popMenu = "none";
      } else {
        this.popMenu = "block";
      }
    },
  },
};
</script>

<style lang="scss">
%tp{
  color: red;
}
.header__wrapper-burger__footer-menu {
  display: none;
}
.header {
  .header__button {
    position: relative;
    z-index: 2;
  }
  padding: 10px 135px 0 135px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
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
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
  .header__link {
    flex: 0 0 120px;
    overflow: hidden;
    font-size: 0;
    margin-right: 40px;
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
    .header__menu-item {
      &:nth-child(1) {
        min-width: 140px;
      }
      font-family: "GT Eesti Pro Display";
      font-size: 18px;
      color: #72727e;
      margin-right: 60px;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: #446df6;
        cursor: pointer;
      }
    }
  }
  .button-all {
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

@media (max-width: 430px) {
  .header__button {
    display: none;
  }
  .header {
    padding: 5px 25px 5px 25px;
    position: fixed;
    margin: 0;
    width: 100%;
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
    padding: 40px 0px 30px 30px;
    position: relative;
    z-index: 2;
    border-left: 2px solid #e9ecf5;
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
</style>
