<template>
  <div class="popup-menu">
    <header class="popup-menu__header">
      <div class="popup-menu__btn-close" @click="$emit('close')"></div>
    </header>
    <main class="popup-menu__main">
      <h1 class="popup-menu__title main-page-title">
        {{ stayPartnerBtn.title }}
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
            class="text"
            type="text"
            :placeholder="stayPartnerBtn.menuItemName"
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
            class="email"
            type="email"
            :placeholder="stayPartnerBtn.menuItemMail"
          /><br />
        </div>

        <div class="main-page-title__wrapper">
          <svg
            class="main-page-title__svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.58841 7.8207C2.87342 7.62747 3.26259 7.69743 3.4576 7.98145C5.62015 11.1207 9.57026 14.6547 12.0837 15.6992C13.1003 16.1714 13.857 16.2006 14.4204 15.7966C14.8596 15.5309 16.1071 14.2915 16.0846 13.6469C16.0771 13.5711 15.9904 13.4287 15.8429 13.2779C15.3629 12.7865 13.752 11.5679 13.4154 11.4413C13.1495 11.3847 12.8728 11.5463 12.4512 11.812L12.2378 11.9444C11.942 12.1218 11.5578 12.0277 11.3795 11.7312C11.202 11.4363 11.297 11.0524 11.5928 10.8741L11.7853 10.755C12.252 10.461 12.8962 10.0596 13.7062 10.2278C14.3445 10.3602 16.3521 12.0111 16.7363 12.4034C17.0979 12.7732 17.298 13.1671 17.3321 13.5728C17.3863 15.1078 15.3304 16.712 15.0946 16.8469C14.6462 17.1701 14.1204 17.3333 13.5287 17.3333C12.9403 17.3333 12.287 17.1717 11.5795 16.8419C8.85857 15.7125 4.74346 12.0502 2.42841 8.68942C2.23257 8.4054 2.30424 8.01643 2.58841 7.8207ZM4.25206 0.667474L4.39937 0.669782C4.82938 0.705597 5.22273 0.905494 5.5919 1.26531C5.98525 1.64928 7.63696 3.65825 7.76946 4.29376C7.91196 4.97757 7.60445 5.51147 7.38028 5.90127C7.15944 6.28524 7.08278 6.44932 7.15861 6.65671C7.71612 8.02018 8.57781 9.13461 9.71201 9.94419C9.99285 10.1458 10.057 10.5356 9.85618 10.8162C9.73451 10.9862 9.54284 11.0778 9.34783 11.0778C9.22116 11.0778 9.09449 11.0395 8.98449 10.9612C7.65612 10.0108 6.64943 8.71399 5.99191 7.10565C5.70274 6.31022 6.04608 5.71386 6.29692 5.27825C6.48526 4.95175 6.58943 4.75685 6.54526 4.54863C6.42859 4.24795 5.21023 2.63961 4.71855 2.16068C4.56688 2.01159 4.42437 1.92414 4.31854 1.91581C3.72186 1.90165 2.50182 3.08105 2.22515 3.53998C1.79597 4.12967 1.82597 4.88512 2.28682 5.8971C2.42932 6.21111 2.29099 6.58092 1.97681 6.72418C1.6618 6.86661 1.29263 6.72918 1.14929 6.41434C0.49344 4.97591 0.50594 3.77486 1.18596 2.84783C1.4393 2.42388 3.03184 0.580661 4.39937 0.669782L4.25206 0.667474Z"
              fill="#C0C0C0"
            />
          </svg>
          <input
            class="tel"
            type="tel"
            maxlength="12"
            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
            :placeholder="stayPartnerBtn.menuItemNumberPhone"
          /><br />
        </div>
        <div class="main-page-title__input-checkbox checkbox-top">
          <input type="checkbox" name="checkTop" value="yes" />
          <label for="checkTop">{{ stayPartnerBtn.checkboxTop }}</label>
        </div>
        <div class="main-page-title__input-checkbox checkbox-bot">
          <input type="checkbox" name="checkBot" value="no" />
          <label for="checkBot">{{ stayPartnerBtn.checkboxBot }}</label>
        </div>
        <footer class="footer-popup">
          <button class="button-all popup-menu__btn-get">
            {{ stayPartnerBtn.btn }}
          </button>
          <p class="main-page-subtitle popup-menu__subtitle-footer">
            {{ stayPartnerBtn.subtitle }}
            <a href="#">{{ stayPartnerBtn.subtitleLink }}</a>
          </p>
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
  },
};
</script>

<style lang="scss">
.popup-menu {
  display: block;
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

      .text,
      .email,
      .tel {
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

      .tel {
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
