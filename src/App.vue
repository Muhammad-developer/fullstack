<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/about">Задачи</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: url("assets/img.png") no-repeat;
}

nav {
  padding: 20px;
  margin: auto;
  top: -10px;
  a {
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
