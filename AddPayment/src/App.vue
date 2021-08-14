<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <div class="menu">
      <router-link to="/dashboard">Dashboard </router-link>/
      <router-link to="/about">About </router-link>/
      <router-link to="/notfound">Not Found </router-link>/
    </div>
    <main>
      <div class="content-page">
        <router-view />
        <transition name='fade'>
          <ModalWindow v-if="modalSetings.name" :settings="modalSetings" />
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
// import ModalWindow from '@/components/ModalWindow.vue';

export default {
  name: "App",
  components: {
    ModalWindow: () =>
      import(
        /*webpackChunkName: 'ModalWindow'*/ "@/components/ModalWindow.vue"
      ),
  },
  data() {
    return {
      modalShow: false,
      modalSetings: {},
    };
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
  methods: {
    onShow(settings) {
      this.modalSetings = settings;
      console.log(settings);
    },
    onHide() {
      this.modalSetings = {};
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
}

</style>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap");
#app {
  font-family: "Otomanopee One", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: cadetblue;
  &:hover {
    color: rgb(137, 172, 173);
  }
}
* {
  box-sizing: border-box;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
