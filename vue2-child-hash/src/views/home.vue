<template>
  <div>
    微应用 hash--首页
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
  methods: {
    jumpPage(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style scoped>
li {
  margin: 10px;
}
</style>
