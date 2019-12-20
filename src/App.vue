<template>
  <div class="ui text container">
    <!-- <app-header></app-header> -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
// import Header from './components/Header.vue'; 
// import Footer from './components/Footer.vue'; 
export default  {
//   components: {
//     appHeader: Header,
//     appFooter: Footer
//   }
}
</script>

<style>
  /* Animation */
  .fade-enter-active {
    animation: fade-in 200ms ease-in forwards;
  }
  .fade-leave-active {
    animation: fade-out 200ms ease-out forwards;
  } 
  @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
  } 
  @keyframes fade-out {
      from {
        opacity: 1;
      }   
      to {
        opacity: 0;
      }
  }
</style>