<template>
  <div class="slider-wrapper">
    <div
      class="slider-wrapper__carusel"
      :style="{ 'margin-left': '-' + 106 * curentSlideIndex + '%' }"
    >
      <SliderItem
        v-for="(item, index) in sliderItemsBlock"
        :key="index"
        :item_data="item"
      />
    </div>

    <div class="slider-wrapper__button-wrapper">
      <button class="button-link left" @click="prev">
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 1L1.5 6L6.5 11"
            stroke="#EEEEEE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button class="button-link right" @click="next">
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 11L6.5 6L1.5 1"
            stroke="#EEEEEE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import SliderItem from "@/components/componentsMain/SliderItem.vue";
export default {
  data() {
    return {
      curentSlideIndex: 0,
    };
  },
  components: {
    SliderItem,
  },
  props: {
    item_data: {
      type: Array,
      default: () => {},
    },
  },
  computed: {
    sliderItems() {
      return this.$store.getters.sliderItems;
    },

    sliderItemsBlock() {
      return this.$store.getters.sliderItemsBlock;
    },
  },
  methods: {
    prev() {
      const sliderIndexZero = 0;
      if (this.curentSlideIndex === sliderIndexZero) {
        this.curentSlideIndex = this.sliderItemsBlock.length - 1;
      } else {
        this.curentSlideIndex--;
      }
    },
    next() {
      if (this.curentSlideIndex >= this.sliderItemsBlock.length - 1) {
        this.curentSlideIndex = 0;
      } else {
        this.curentSlideIndex++;
      }
    },
  },
};
</script>

<style lang="scss">
.slider-wrapper {
  max-width: 1650px;
  overflow: hidden;
  position: relative;
  .slider-wrapper__carusel {
    display: flex;
    transition: all ease 0.5s;
    padding: 0 50px 0 0;
  }
  .button-link {
    position: absolute;
    top: 40px;
    right: 80px;
    background: #f7f8fd;
    border: none;
    border-radius: 30px;
    width: 50px;
    height: 50px;
    transition: box-shadow 0.3s;
    &:active {
      background: #446df6;
    }
    &:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
  }
  .left {
    right: 140px;
  }
}

@media (max-width: 430px) {
  .slider-wrapper {
    text-align: center;
    .slider-wrapper__carusel {
      padding: 0;
      margin-bottom: 20px;
    }
  }
  .slider-wrapper__button-wrapper {
    height: 12vh;

    .button-link {
      position: static;
      width: 80px;
      height: 80px;
    }
    .left {
      margin-right: 30px;
    }
  }
}
</style>
