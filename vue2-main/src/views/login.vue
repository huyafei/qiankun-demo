<template>
  <div class="">
    <button @click="login">登录</button>
  </div>
</template>
<script>
/**
 * @name: login
 * @description：login.vue
 * @date: 2022/7/26 15:39
 * @author: yf_hu
 */
import globalState from "@/actions";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {},
  directives: {},
  mixins: [],
  props: {},
  data() {
    return {
      redirect: this.$route.query.redirect || "/",
    };
  },
  computed: {},
  watch: {},

  created() {},

  mounted() {},
  methods: {
    getRandom(min, max) {
      return Math.random() * (max - min) + min;
    },
    login() {
      globalState.setGlobalState({ token: "token_" + this.getRandom(1, 100) });
      this.$router.replace(this.redirect);
    },
  },
};
</script>
<style scoped></style>
