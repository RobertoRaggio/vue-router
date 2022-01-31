<template>
  <div>
    <nav>
      <router-link :to="{ name: 'SobreMi1' }"> Sobre Mi </router-link> |
      <router-link :to="{ name: 'Contacto1' }"> Contacto </router-link>
    </nav>

    <transition name="slide-fade" mode="out-in">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>