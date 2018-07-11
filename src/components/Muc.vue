<template>
  <div class="muc container">
    <section>
      <b-field label="URI">
        <b-input v-model="searchUri"></b-input>
      </b-field>
    </section>
    <h1>{{ results }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Muc',
  props: {
    api: Function,
  },
  data() {
    return {
      searchUri: null,
      results: [],
    };
  },
  created() {
    this.api().getUriMatches('spotify:track:6u9kkqfjdZPxAxEtHmGl68').then((m) => { this.results = m; });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
