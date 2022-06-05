<template>
  <div class="wrapper-stay-partner">
    <div class="wrapper-stay-partner__title-container">
      <h1 class="main-page-title">{{ stayPartnerTitles }}</h1>
    </div>
    <div class="wrapper-stay-partner__subtitle">
      <p class="main-page-subtitle">{{ stayPartnerSubTitles }}</p>
    </div>
    <ul class="wrapper-stay-partner__list">
      <li v-for="(item, index) in stayPartnerList" :key="index">
        <figure>
          <img 
          :src="item.img" 
          alt="item-img" 
          width="36" 
          height="36" />
        </figure>
        <div class="wrapper-stay-partner__wrapper-p">
          <p class="main-page-subtitle">{{ item.sub }}</p>
        </div>
      </li>
    </ul>
    <button class="button-all" @click="popupMenu">
      {{ stayPartnerButton }}
    </button>
    <PopupMenu
      class="popup-partner stay-partner-popup"
      :style="{ display: popMenu }"
      @popupClose="popupMenu"
    ></PopupMenu>
  </div>
</template>

<script>
import PopupMenu from "./PopupMenu.vue";
export default {
  name: "StayPartner",
  data() {
    return {
      popMenu: "none",
    };
  },
  components: { PopupMenu },
  computed: {
    stayPartnerTitles() {
      return this.$store.getters.stayPartnerTitles;
    },
    stayPartnerSubTitles() {
      return this.$store.getters.stayPartnerSubTitles;
    },
    stayPartnerList() {
      return this.$store.getters.stayPartnerList;
    },
    stayPartnerButton() {
      return this.$store.getters.stayPartnerButton;
    },
  },
  methods: {
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
.wrapper-stay-partner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  &__title-container {
    margin-bottom: 20px;
    & > h1 {
      font-size: 32px;
    }
  }
  &__subtitle {
    max-width: 841px;
    width: 100%;
    margin-bottom: 50px;
    & > p {
      text-align: center;
    }
  }
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1140px;
    margin-bottom: 40px;
    & > li {
      max-width: 210px;
      width: 100%;
      padding: 39px 32px 33px 32px;
      background: #ffffff;
      box-shadow: 0px 16px 20px rgba(20, 27, 65, 0.03);
      border-radius: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 12px;
      & > figure {
        margin-bottom: 20px;
      }

      .wrapper-stay-partner__wrapper-p {
        & > p {
          text-align: center;
        }
      }
    }
  }
  & > button {
    background: #446df6;
    color: #eeeeee;
    &:hover {
      box-shadow: 0 0 12px rgba(20, 20, 20, 0.7) inset;
    }
  }
}

@media (max-width: 430px) {
  .wrapper-stay-partner {
    align-items: center;
    text-align: center;
    .stay-partner-popup {
      top: 20%;
      left: 0;
      transform: translate(0%, 0%);
      main > h1 {
        text-align: center;
      }
    }
    &__title-container {
      max-width: 250px;
      width: 100%;
      h1 {
        font-size: 24px;
      }
    }

    &__subtitle {
      max-width: 330px;
    }

    &__list {
      align-items: center;
      flex-direction: column;
      li {
        max-width: 390px;
      }
    }
  }
}
</style>
