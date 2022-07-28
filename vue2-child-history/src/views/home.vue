<template>
  <div>
    微应用 history--首页 <button @click="signOut">退出登录</button>
    <ul>
      <li v-for="item in list" :key="item.path">
        <button @click="jumpPage(item.path)">{{ item.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {},
  data() {
    return {
      list: [
        {
          name: "跳转详情",
          path: "/detail",
        },
      ],
    };
  },
  mounted() {
    console.log("--$mainStore--", this.$mainStore);
  },
  methods: {
    jumpPage(path) {
      this.$router.push(path);
    },
    signOut() {
      this.$mainStore.setGlobalState({ token: "" });
    },
  },
};
</script>
<style scoped>
li {
  margin: 10px;
}
</style>
