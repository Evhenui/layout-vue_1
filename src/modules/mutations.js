export default {
    modalRegisterClose(state) {
      state.showModal.modalRegister = false;
    },
    modalRegisterOpen(state) {
      state.showModal.modalRegister = true;
    },
    modalLoginClose(state) {
      state.showModal.modalLogin = false;
    },
    modalLoginOpen(state) {
      state.showModal.modalLogin = true;
    }
  };