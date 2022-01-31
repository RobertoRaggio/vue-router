<template>
  <div>
    Bienvenido a la página de Administración Simple
    <transition name="slide-fade" mode="out-in">
      <router-view> </router-view>
    </transition>
  </div>
</template>