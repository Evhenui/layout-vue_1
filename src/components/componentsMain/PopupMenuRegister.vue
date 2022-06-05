<template>
  <div class="popup-menu">
    <header class="popup-menu__header">
      <div class="popup-menu__btn-close" @click="popupClose"></div>
    </header>
    <main class="popup-menu__main">
      <h1 class="popup-menu__title main-page-title">
        {{ popupRegister.title }}
      </h1>
      <form action="/action_page.php">
        <div class="main-page-title__wrapper">
          <svg
            class="main-page-title__svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8507 14.1875C15.2091 14.1875 15.5 14.4815 15.5 14.8438C15.5 15.206 15.2091 15.5 14.8507 15.5H9.33024C8.97098 15.5 8.68097 15.206 8.68097 14.8438C8.68097 14.4815 8.97098 14.1875 9.33024 14.1875H14.8507ZM8.08754 1.36538C8.90302 0.311893 10.3314 0.208644 11.4819 1.11951L12.6852 2.07324C13.2107 2.48973 13.5699 3.03748 13.6955 3.61672C13.8357 4.26333 13.6808 4.91957 13.26 5.46206L6.08434 14.7159C5.72161 15.184 5.17623 15.457 4.5867 15.4649L1.81823 15.4999C1.50831 15.4999 1.246 15.2899 1.17762 14.9924L0.550857 12.2677C0.417541 11.6876 0.549126 11.0865 0.912715 10.6184L1.85458 9.403C2.07533 9.11776 2.48394 9.06701 2.76615 9.29188C3.04837 9.515 3.09771 9.928 2.8761 10.2132L1.93423 11.4286C1.81476 11.5826 1.77148 11.7795 1.81563 11.9702L2.32379 14.1804L4.57025 14.1524C4.7633 14.1498 4.9425 14.0606 5.06196 13.9066L12.2377 4.6527C12.4212 4.41646 12.4844 4.16271 12.4272 3.89671C12.3658 3.61584 12.1736 3.33497 11.8845 3.1066L10.6811 2.15199C10.2154 1.7845 9.55835 1.5955 9.10992 2.17561L8.16199 3.3971L9.66656 4.61683C9.94617 4.84257 9.99119 5.25644 9.76698 5.53819C9.63885 5.70094 9.45014 5.78493 9.25968 5.78493C9.11771 5.78493 8.97401 5.73769 8.85454 5.64056L7.36123 4.43045L4.90614 7.59703C4.68452 7.88228 4.27678 7.9339 3.9937 7.70816C3.71235 7.48503 3.66301 7.07204 3.88376 6.78679L8.08754 1.36538Z"
              fill="#C0C0C0"
            />
          </svg>
          <input
            class="text-reg"
            type="text"
            :placeholder="popupRegister.loginInput"
          /><br />
        </div>
        <div class="main-page-title__wrapper">
          <svg
            class="main-page-title__svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4976 0.5C15.1648 0.508155 17.3251 2.68433 17.3332 5.37129V6.58911L17.3278 6.66972C17.2887 6.95968 17.042 7.18317 16.7435 7.18317L16.7361 7.16832L16.6433 7.16092C16.5213 7.14133 16.4076 7.08345 16.3191 6.99432C16.2085 6.88291 16.1464 6.73181 16.1464 6.57426V5.37129C16.1264 3.34962 14.5044 1.71566 12.4976 1.69554H5.50212C3.49526 1.71566 1.87326 3.34962 1.85329 5.37129V10.6287C1.87326 12.6504 3.49526 14.2843 5.50212 14.3045H12.4976C14.5044 14.2843 16.1264 12.6504 16.1464 10.6287C16.1801 10.3242 16.4357 10.094 16.7398 10.094C17.0439 10.094 17.2994 10.3242 17.3332 10.6287C17.3251 13.3157 15.1648 15.4918 12.4976 15.5H5.50212C2.83317 15.4959 0.670563 13.3174 0.666504 10.6287V5.37129C0.666504 2.68095 2.83148 0.5 5.50212 0.5H12.4976ZM4.2452 4.98911C4.40042 4.97235 4.55582 5.01908 4.67653 5.11881L8.14107 7.88119C8.57384 8.22325 9.18258 8.22325 9.61535 7.88119L13.043 5.11881H13.0504L13.1227 5.0691C13.3717 4.92341 13.6953 4.97717 13.8834 5.20792C13.9819 5.33167 14.0273 5.49 14.0093 5.64762C13.9913 5.80525 13.9114 5.94907 13.7875 6.04703L10.3599 8.81683C9.4883 9.52337 8.24601 9.52337 7.37445 8.81683L3.93939 6.04703L3.87597 5.9863C3.68226 5.77162 3.66649 5.44166 3.85094 5.20792C3.94793 5.08469 4.08998 5.00586 4.2452 4.98911Z"
              fill="#C0C0C0"
            />
          </svg>
          <input
            class="email-reg"
            type="email"
            :placeholder="popupRegister.mailInput"
          /><br />
        </div>

        <div class="main-page-title__wrapper">
          <svg
            class="main-page-title__svg"
            width="18"
            height="16"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2469 29.8791C23.0624 29.8836 22.8794 29.8371 22.7189 29.7441L15.0119 25.6851L8.22587 29.3391C7.11887 29.9391 5.73287 29.5281 5.13287 28.4196C5.12537 28.4061 5.11787 28.3926 5.11037 28.3776C4.87487 27.9141 4.79237 27.3906 4.87337 26.8776L6.19337 19.0866L0.676369 13.5006C-0.225131 12.5706 -0.225131 11.0916 0.676369 10.1601C1.02737 9.79107 1.49237 9.55257 1.99637 9.48357L9.56087 8.33457L12.9254 1.32507C13.4489 0.185067 14.7974 -0.315933 15.9389 0.207567C16.4339 0.434067 16.8299 0.831567 17.0564 1.32507L20.4359 8.35857L28.0259 9.52107C28.6394 9.61257 29.1899 9.95157 29.5499 10.4571C30.2219 11.4231 30.1199 12.7281 29.3069 13.5786L23.8154 19.0986L24.5804 23.2971C24.6869 23.9271 24.2714 24.5286 23.6429 24.6471C23.0249 24.7581 22.4339 24.3471 22.3229 23.7276L21.5444 19.5291C21.4139 18.7596 21.6584 17.9736 22.2044 17.4171L27.7094 11.8581L20.1194 10.6806C19.3499 10.5561 18.6974 10.0461 18.3899 9.33057L15.0119 2.32707L11.5919 9.44157C11.2844 10.1586 10.6319 10.6671 9.86237 10.7916L2.29787 11.9406L7.76237 17.4906C8.30687 18.0381 8.55137 18.8136 8.42237 19.5741L7.10237 27.3651L13.8869 23.7261C14.5589 23.3481 15.3794 23.3481 16.0514 23.7261L23.7479 27.7851C24.2174 28.0416 24.4559 28.5831 24.3284 29.1036C24.2114 29.6241 23.7524 29.9946 23.2199 30.0036L23.2469 29.8791Z"
              fill="#C0C0C0"
            />
          </svg>
          <input
            class="password"
            type="password"
            maxlength="12"
            :placeholder="popupRegister.passInput"
          /><br />
        </div>
        <div class="main-page-title__wrapper last-block-reg">
          <svg
            class="main-page-title__svg"
            width="18"
            height="16"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2469 29.8791C23.0624 29.8836 22.8794 29.8371 22.7189 29.7441L15.0119 25.6851L8.22587 29.3391C7.11887 29.9391 5.73287 29.5281 5.13287 28.4196C5.12537 28.4061 5.11787 28.3926 5.11037 28.3776C4.87487 27.9141 4.79237 27.3906 4.87337 26.8776L6.19337 19.0866L0.676369 13.5006C-0.225131 12.5706 -0.225131 11.0916 0.676369 10.1601C1.02737 9.79107 1.49237 9.55257 1.99637 9.48357L9.56087 8.33457L12.9254 1.32507C13.4489 0.185067 14.7974 -0.315933 15.9389 0.207567C16.4339 0.434067 16.8299 0.831567 17.0564 1.32507L20.4359 8.35857L28.0259 9.52107C28.6394 9.61257 29.1899 9.95157 29.5499 10.4571C30.2219 11.4231 30.1199 12.7281 29.3069 13.5786L23.8154 19.0986L24.5804 23.2971C24.6869 23.9271 24.2714 24.5286 23.6429 24.6471C23.0249 24.7581 22.4339 24.3471 22.3229 23.7276L21.5444 19.5291C21.4139 18.7596 21.6584 17.9736 22.2044 17.4171L27.7094 11.8581L20.1194 10.6806C19.3499 10.5561 18.6974 10.0461 18.3899 9.33057L15.0119 2.32707L11.5919 9.44157C11.2844 10.1586 10.6319 10.6671 9.86237 10.7916L2.29787 11.9406L7.76237 17.4906C8.30687 18.0381 8.55137 18.8136 8.42237 19.5741L7.10237 27.3651L13.8869 23.7261C14.5589 23.3481 15.3794 23.3481 16.0514 23.7261L23.7479 27.7851C24.2174 28.0416 24.4559 28.5831 24.3284 29.1036C24.2114 29.6241 23.7524 29.9946 23.2199 30.0036L23.2469 29.8791Z"
              fill="#C0C0C0"
            />
          </svg>
          <input
            class="password-re"
            type="password"
            maxlength="12"
            :placeholder="popupRegister.passInput"
          /><br />
        </div>
        <div class="main-page-title__input-checkbox checkbox-top">
          <input type="checkbox" name="checkTopReg" value="yes" />
          <label for="checkTopReg">{{ stayPartnerBtn.checkboxTop }}</label>
        </div>
        <footer class="footer-popup">
          <button class="button-all popup-menu__btn-get">
            {{ stayPartnerBtn.btn }}
          </button>
        </footer>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "PopupMenu",
  data() {
    return {
      popMenu: "block",
    };
  },
  methods: {
    popupClose() {
      this.$emit("popupClose");
    },
  },
  computed: {
    stayPartnerBtn() {
      return this.$store.getters.stayPartnerBtn;
    },
    popupRegister() {
      return this.$store.getters.popupRegister;
    },
  },
};
</script>

<style lang="scss">
.popup-menu {
  padding: 24px 24px 35px 24px;
  background-color: #fff;
  box-shadow: 0 0 5px #000, inset 0 1px 8px -2px #fff;
  &__header {
    display: flex;
    justify-content: end;
    margin: 0 0 30px 0;
  }

  &__btn-close {
    cursor: pointer;
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    &::after {
      content: "";
      background-color: #72727e;
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      top: 16px;
      transform: rotate(45deg);
    }
    &::before {
      content: "";
      background-color: #72727e;
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      top: 16px;
      transform: rotate(-45deg);
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
      .main-page-title__wrapper {
        position: relative;
        .main-page-title__svg {
          position: absolute;
          top: 12px;
          left: 12px;
        }
        &::after {
          content: "";
          width: 20px;
          height: 20px;
          border-right: 2px solid #e9ecf5;
          position: absolute;
          top: 11px;
          left: 20px;
        }
      }

      .text-reg,
      .email-reg,
      .password,
      .password-re {
        padding: 20px 20px 20px 50px;
        margin: 0 0 10px 0;
        font-family: "GT Eesti Pro Display";
        font-size: 14px;
        color: #c0c0c0;
        width: 100%;
        height: 25px;
        border-radius: 10px;
        border: 2px solid #e9ecf5;
        &:focus {
          outline: none;
          border: 2px solid #446df6;
        }
      }

      .last-block-reg {
        margin: 0 0 20px 0;
      }
    }
  }

  &__title {
    font-size: 22px;
    margin: 0 0 30px 0;
  }
  .main-page-title__input-checkbox {
    display: flex;
    align-items: center;
    input {
      width: 30px;
      height: 30px;
      margin: 0 20px 0 0;
      border: 5px solid #e9ecf5;
      border-radius: 6px;
    }

    label {
      font-family: "GT Eesti Pro Display";
      font-size: 14px;
      color: #72727e;
    }
  }
  .checkbox-top {
    margin: 0 0 20px 0;
  }
  .checkbox-bot {
    margin: 0 0 30px 0;
  }

  .footer-popup {
    align-items: center;
    display: flex;
    flex-direction: column;
    .popup-menu__btn-get {
      background: #446df6;
      color: #ffffff;
      transition: all 0.3s;
      margin: 0 0 30px 0;
      &:hover {
        border: 1px solid black;
      }
    }
    .popup-menu__subtitle-footer {
      padding: 0 30px 0 30px;
      a {
        font-family: "GT Eesti Pro Display";
        line-height: 140%;
        color: #0000fc;
      }
    }
  }
}
</style>
