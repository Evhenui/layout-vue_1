<template>
  <div class="container-search-block">
    <div class="container-search-block__wrapper-left">
      <div class="container-search-block__main-text">
        <h1 class="main-page-title">{{ $store.state.searchTextMain }}</h1>
        <svg
          class="svg"
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9393 21.0607C11.5251 21.6464 12.4749 21.6464 13.0607 21.0607L22.6066 11.5147C23.1924 10.9289 23.1924 9.97919 22.6066 9.3934C22.0208 8.80761 21.0711 8.80761 20.4853 9.3934L12 17.8787L3.51472 9.3934C2.92893 8.80761 1.97918 8.80761 1.3934 9.3934C0.807611 9.97918 0.807611 10.9289 1.3934 11.5147L10.9393 21.0607ZM10.5 -6.55671e-08L10.5 20L13.5 20L13.5 6.55671e-08L10.5 -6.55671e-08Z"
            fill="#446DF6"
          />
        </svg>
      </div>
      <div class="container-search-block__sub-main-text">
        <p class="main-page-subtitle">{{ $store.state.searchTextSubMain }}</p>
      </div>
      <button class="button-all btn-search-block" @click="popupMenuRegister">
        {{ $store.state.searchButtonName }}
      </button>
    </div>
    <figure class="container-search-block__wpapper-img">
      <img 
      src="@/assets/iPhoneSearchImg.png" 
      alt="curtains"
      width="592" 
      height="589"
      />
    </figure>
    <figure class="container-search-block__wpapper-img-smart">
      <img
        src="@/assets/iPhone-search-smart.png"
        width="320"
        height="260"
        alt="cirtans"
      />
    </figure>
    <PopupMenuRegister
      class="popup-register popup-register-mobile"
      :style="{ display: menuRegister }"
      @popupClose="popupMenuRegister"
    />
  </div>
</template>

<script>
import PopupMenuRegister from "./PopupMenuRegister.vue";
export default {
  name: "SearchMainApp",
  components: { PopupMenuRegister },
  data() {
    return {
      active: false,
      menuRegister: "none",
    };
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
.container-search-block {
  display: flex;
  margin-bottom: 60px;
  &__main-text {
    padding-top: 104px;
    margin-bottom: 40px;
    max-width: 555px;
    width: 100%;
    position: relative;
    justify-content: space-between;
    &::before {
      content: "";
      background-image: url("@/assets/Arrow.png");
      position: absolute;
      top: 86%;
      left: 62%;
      width: 105px;
      height: 100px;
      background-repeat: no-repeat;
    }
    .svg {
      display: none;
    }
  }
  &__sub-main-text {
    max-width: 550px;
    margin-bottom: 70px;
    & > p {
      font-size: 24px;
    }
  }
  & .btn-search-block {
    margin-bottom: 100px;
    background: #446df6;
    color: #eeeeee;
    &:hover {
      border: 1px solid #0c0c0c;
    }
  }
  &__wpapper-img {
    max-width: 592px;
    width: 100%;
    & > img {
      width: 100%;
      height: auto;
      background-color: rgb(32, 32, 30);
    }
  }
}
.main-page-title {
  font-size: 40px;
}
.container-search-block__wpapper-img-smart {
  display: none;
}

@media (max-width: 430px) {
  .container-search-block {
    padding: 60px 10px 0 10px;
    text-align: center;
    flex-direction: column;
     .popup-register-mobile {
        top: 20%;
        left: 0;
        transform: translate(0%, 0%);
    }
    &__main-text {
      padding: 0 30px 0 30px;
      &::before {
        background: none;
      }
      & > h1 {
        font-size: 24px;
        margin: 0 0 20px 0;
      }
      .svg {
        display: block;
        margin: 0 auto;
      }
    }

    &__sub-main-text {
      padding: 0 30px 0 30px;
      margin-bottom: 60px;
      & > p {
        font-size: 18px;
      }
    }

    &__wpapper-img {
      display: none;
    }
    .btn-search-block {
      margin-bottom: 50px;
    }
  }
  .container-search-block__wpapper-img-smart {
    display: block;
  }
}
</style>
