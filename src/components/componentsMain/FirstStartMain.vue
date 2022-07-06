<template>
  <div class="container-first-start">
    <div class="container-first-start__title">
      <h1 class="main-page-title">{{ startTitle }}</h1>
    </div>
    <div class="container-first-start-right-page">
      <div class="container-first-start__wrapper-img">
        <img 
        src="@/assets/Rectangle.png" 
        alt="phone"
        width="378"
        height="458" 
        />
      </div>
      <ul class="container-first-start__submenu">
        <li
          class="container-first-start__list-menu"
          v-for="(item, index) in firstStartTitles"
          :key="index"
        >
          <div class="container-first-start__item-img">
            <img 
            :src="item.image" 
            alt="itemLogo"
            width="36" 
            height="36"
            />
          </div>
          <div class="container-first-start__submenu-items">
            <h1 class="main-page-title">
              {{ item.titleStart }}
            </h1>
            <p class="main-page-subtitle">
              {{ item.subtitleStart }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "FirstStartMain",
  computed: { 
    ...mapGetters(['startTitle', 'firstStartTitleSubMenu', 'firstStartSubTitleSubMenu', 'firstStartTitles'])
  },
};
</script>

<style lang="scss">
.container-first-start {
  margin-bottom: 110px;
  &__title {
    margin-bottom: 50px;
    & > h1 {
      font-size: 40px;
      text-align: center;
    }
  }
  &__wrapper-img {
    position: relative;
    padding: 0 41% 50% 0;
    background-repeat: no-repeat;
    background-image: url("@/assets/background-header.png");
    background-position: -137px -91px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &-right-page {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__list-menu {
    display: flex;
    .container-first-start__item-img {
      margin-right: 20px;
      padding-top: 10px;
    }
    .container-first-start__submenu-items {
      h1 {
        margin-bottom: 5px;
      }
      p {
        margin-bottom: 40px;
      }
    }
  }
}
@media (max-width: 991.98px) {
  
}

@media (max-width: 430px) {
  .container-first-start {
    &__title {
      h1 {
        font-size: 22px;
      }
    }

    &__wrapper-img {
      padding: 0 100% 120% 0;
      background-position: -168px -132px;
    }

    &__list-menu {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    &__list-menu:last-child {
      margin-bottom: 50px;
    }

    &__submenu-items {
      h1 {
        font-size: 20px;
      }

      p {
        max-width: 280px;
        width: 100%;
        font-size: 15px;
      }
    }
  }
  .container-first-start-right-page {
    flex-direction: column-reverse;
    align-items: center;
  }
}
</style>
