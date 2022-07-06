<template>
  <Popup>
    <template v-slot:header>
      <h1>Регистрация</h1>
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
        <div class="input-name">
          <label for="text">Имя</label>
          <input
            class="text"
            type="text"
            placeholder="придумайте имя"
            v-model="userName"
            required
            maxlength="15"
          />
        </div>
        <div class="input-password">
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
        <div class="input-password-re">
          <label for="repeat-pass">Пароль</label>
          <input
            class="repeat-pass"
            type="password"
            placeholder="повторите пароль"
            v-model="repeatedPassword"
            required
            ref="repeatedPasswordEl"
            maxlength="16"
            minlength="6"
          />
        </div>
        <footer class="footer-popup">
          <button class="button-all popup-btn-register" type="submit">
            Отправить
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
    userName: null,
    password: null,
    repeatedPassword: null,
  }),
  components: {
    Popup,
  },
  watch: {
    repeatedPassword: "checkPasswordsEquality",
    password: "checkPasswordsEquality",
  },
  methods: {
    checkPasswordsEquality() {
      const { password, repeatedPassword, email, userName } = this;
      const { repeatedPasswordEl } = this.$refs;
      if (password !== repeatedPassword) {
        repeatedPasswordEl.setCustomValidity("Passwords must match");
      } else {
        repeatedPasswordEl.setCustomValidity("");
      }
    },
  },
};
</script>

<style lang="scss">
.form > .input-password-re {
  margin-bottom: 40px;
}
.footer-popup {
  display: flex;
  .popup-btn-register{
  background: #446df6;
  color: white;
  margin: 0 auto;
  padding: 10px 13px;
}
}

</style>