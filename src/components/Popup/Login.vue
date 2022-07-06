<template>
  <Popup>
    <template v-slot:header>
      <h1>Вход</h1>
    </template>
    <template v-slot:body>
      <form class="form" action="" method="">
        <div class="input-email">
          <label for="email">Почта</label>
          <input
            class="email"
            type="email"
            placeholder="введите вашу почту"
            v-model="email"
            required
          />
        </div>
        <div class="input-password password-login">
          <label for="password">Пароль</label>
          <input
            class="password"
            type="password"
            placeholder="пароль"
            v-model="password"
            required
            maxlength="16"
            minlength="6"
          />
        </div>
        <footer class="footer-popup">
          <button class="button-all popup-btn-login" type="submit">
            Вход
          </button>
        </footer>
      </form>
    </template>
  </Popup>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  data: () => ({
    email: null,
    password: null,
  }),
  components: {
    Popup,
  },
};
</script>

<style lang="scss">
.form > .password-login {
  margin-bottom: 40px;
}

.footer-popup {
  display: flex;
  .popup-btn-login {
    background: #446df6;
    color: white;
    margin: 0 auto;
    padding: 15px 22px;
  }
}
</style>