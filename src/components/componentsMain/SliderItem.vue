<template>
  <div class="slider-items-wrapper">
    <div class="slider-items-wrapper__wrapper-title">
      <h1 class="main-page-title">{{ item_data.title }}</h1>
    </div>
    <div class="slider-items-wrapper__wrapper-subtitle">
      <p class="main-page-subtitle">{{ item_data.subtitle }}</p>
    </div>
    <div class="slider-items-wrapper__img-block">
      <div class="slider-items-wrapper__img">
        <img :src="item_data.img" alt="item-img" width="128" height="128" />
      </div>
      <div class="slider-items-wrapper__container-title">
        <h1 class="main-page-title">{{ item_data.workerName }}</h1>
        <p class="main-page-subtitle">{{ item_data.jobTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.slider-items-wrapper {
  min-width: 1251px;
  .slider-items-wrapper__wrapper-title {
    margin-bottom: 17px;
  }
  .slider-items-wrapper__wrapper-subtitle {
    max-width: 660px;
    width: 100%;
    border-bottom: 2px solid #f7f8fd;
    padding: 0 0 30px 0;
    margin: 0 0 29px 0;
  }
  .slider-items-wrapper__img-block {
    display: flex;
    justify-content: space-between;
    max-width: 230px;
    width: 100%;
    .slider-items-wrapper__img {
      max-width: 128px;
      width: 100%;
      margin-right: 30px;
      &:img {
        background-color: rgb(32, 32, 30);
        width: 100%;
        height: auto;
      }
    }
    .slider-items-wrapper__container-title {
      padding: 15px 0 0 0;
    }
  }
}
@media (max-width: 430px) {
  .slider-items-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 430px;

    .slider-items-wrapper__wrapper-title {
      max-width: 300px;
      width: 100%;
      h1 {
        font-size: 24px;
      }
    }
    .slider-items-wrapper__wrapper-subtitle {
      max-width: 300px;
      border-bottom: none;
      p {
        font-size: 18px;
      }
    }
    .slider-items-wrapper__img-block {
      flex-direction: column;
      align-items: center;
      border-bottom: 2px solid #f7f8fd;
      .slider-items-wrapper__img {
        margin: 0 0 20px 0;
        display: block;
        &:img {
          display: inline-block;
        }
      }
      .slider-items-wrapper__container-title {
        padding: 0;
        margin-bottom: 25px;
        h1 {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
