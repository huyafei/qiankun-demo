<template>
  <div>
    <h3>主应用</h3>
    <ul>
      <li v-for="(item, index) in list" :key="index">
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
          name: "app-history",
          path: "/micro-app-history/",
        },
        {
          name: "app-hash",
          path: "/micro-app-hash/",
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
