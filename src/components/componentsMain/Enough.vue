<template>
  <div class="wrapper-enought">
    <div class="wrapper-enought__central-block">
      <div class="wrapper-enought__title">
        <h1 class="main-page-title">{{ enoughTitle }}</h1>
      </div>
      <div class="wrapper-enought__subtitle">
        <p class="main-page-subtitle">{{ enoughSubtitle }}</p>
      </div>
      <div class="wrapper-enought__link-wrapper">
        <a href="#">
          <img 
          src="@/assets/app-store-link.png" 
          alt="appStore" 
          width="163"
          height="50"
          />
        </a>
        <a href="#">
          <img 
          src="@/assets/google-play-link.png" 
          alt="googlePlay" 
          width="163"
          height="50"
          />
        </a>
      </div>
      <img
        class="wrapper-enought__img-smart"
        src="@/assets/enoughIphone-smart.png"
        alt="iphones"
        width="320"
        height="260"
      />
    </div>
    <img
      class="wrapper-enought__img-pc"
      src="@/assets/enoughIphones.png"
      alt="iphones"
      width="522"
      height="438"
    />
  </div>
</template>

<script>
export default {
  computed: {
    enoughTitle() {
      return this.$store.getters.enoughTitle;
    },
    enoughSubtitle() {
      return this.$store.getters.enoughSubtitle;
    },
  },
};
</script>

<style lang="scss">
.wrapper-enought {
  position: relative;
  padding-top: 85px;
  margin-bottom: 220px;
  .wrapper-enought__central-block {
    position: relative;
    background: #446df6;
    opacity: 0.85;
    border-radius: 20px;
    padding: 0 0 62px 70px;
    .wrapper-enought__title {
      max-width: 440px;
      width: 100%;
      padding: 52px 0 0 0;
      margin-bottom: 17px;
      h1 {
        font-family: "GT Eesti Pro Display";
        font-size: 40px;
        line-height: 115%;
        color: #f7f8fd;
      }
    }
    .wrapper-enought__subtitle {
      max-width: 360px;
      width: 100%;
      margin-bottom: 30px;
      p {
        font-size: 18px;
        line-height: 140%;
        color: #e9ecf5;
      }
    }
    .wrapper-enought__link-wrapper {
      display: flex;
      max-width: 350px;
      width: 100%;
      justify-content: space-between;
      a {
        display: inline-block;
        font-size: 0;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .wrapper-enought__img-pc {
    position: absolute;
    top: 0;
    right: 20px;
  }
  .wrapper-enought__img-smart {
    display: none;
  }
}

@media (max-width: 430px) {
  .wrapper-enought__img-pc {
    display: none;
  }
  .wrapper-enought {
    padding: 0;
    margin: 0 0 50px 0;
    .wrapper-enought__central-block {
      background-image: url("@/assets/background-img-enought.png");
      border-radius: 0px;
      padding: 0 0 0 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 620px;
      .wrapper-enought__title {
        max-width: 250px;
        margin-bottom: 30px;
        h1 {
          font-size: 24px;
        }
      }
      .wrapper-enought__subtitle {
        max-width: 350px;
        width: 100%;
        margin: 0 0 40px 0;
        padding: 0 10px 0 10px;
        p {
          font-size: 16px;
        }
      }
      .wrapper-enought__link-wrapper {
        max-width: 180px;
        flex-direction: column;
        min-height: 120px;
        margin-bottom: 24px;
      }
    }
    .wrapper-enought__img-smart {
      display: block;
      position: static;
    }
  }
}
</style>
