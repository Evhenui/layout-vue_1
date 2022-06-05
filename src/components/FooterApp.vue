<template>
  <div class="wrapper-footer">
    <footer class="footer">
      <a class="footer__img-logo" href="#">
        <img
          src="@/assets/GetWash-footer.png"
          alt="footer-logo"
          width="120"
          height="23"
        />
      </a>
      <nav class="footer__nav">
        <ul class="footer__list">
          <li v-for="(item, index) in footerMenu" :key="index">
            <a href="#">
              {{ item.itemName }}
            </a>
          </li>
        </ul>
      </nav>
      <button class="button-all foot" @click="popupMenuRegister">
        {{ footerButton }}
      </button>
    </footer>
    <PopupMenuRegister
      class="popup-register popup-register-mobile"
      :style="{ display: menuRegister }"
      @popupClose="popupMenuRegister"
    />
  </div>
</template>

<script>
import PopupMenuRegister from "./componentsMain/PopupMenuRegister.vue";
export default {
  name: "FooterApp",
  components: { PopupMenuRegister },
  data() {
    return {
      active: false,
      menuRegister: "none",
      popMenu: "none",
    };
  },
  computed: {
    footerMenu() {
      return this.$store.getters.footerMenu;
    },
    footerButton() {
      return this.$store.getters.footerButton;
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
  },
};
</script>

<style lang="scss">
.wrapper-footer {
  .footer {
    padding: 10px 135px 10px 135px;
    background: #141b41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer__img-logo {
      display: inline-block;
      font-size: 0;
      margin-right: 50px;
    }
    .footer__nav {
      .footer__list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        & > li {
          &:nth-child(1) {
            min-width: 145px;
          }
          margin-right: 40px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    ul > li > a {
      text-decoration: none;
      font-family: "GT Eesti Pro Display";
      font-size: 18px;
      color: #e9ecf5;
      &:hover {
        color: #696b70;
      }
    }
  }
  .foot {
    border: 1px solid #72727e;
    border-radius: 6px;
    color: #f7f8fd;
    background: #141b41;
    &:hover {
      color: #696b70;
    }
  }
}
@media (max-width: 430px) {
  .wrapper-footer {
    .popup-register-mobile {
      top: 20%;
      left: 0;
      transform: translate(0%, 0%);
    }
    .footer {
      padding: 40px 0 40px 0;
      flex-wrap: wrap;
      flex-direction: column;
      .footer__img-logo {
        margin: 0 0 40px 0;
      }
      .footer__nav {
        margin: 0 0 30px 0;
        text-align: center;
        .footer__list {
          flex-direction: column;

          & > li {
            margin: 0 0 20px 0;
            &:last-child {
              margin: 0;
            }
          }
        }
      }
    }
  }
}
</style>
