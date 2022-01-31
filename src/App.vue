<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Portada</router-link> |
      <router-link to="/sobremi">Sobre Mi</router-link> |
      <router-link to="/contacto">Contacto</router-link> |
      <router-link to="/post/1">Último artículo</router-link> |
      <router-link to="/administrador">Administrador</router-link>
    </div>
    <transition name="fade">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 40px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #ff4500;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition: fadeIn 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>