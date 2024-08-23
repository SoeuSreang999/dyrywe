<template>
  <div>
    <!-- <NavHeader/> -->
    <SideBar />
    <NuxtPage />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body * {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s ease-in-out;
  }

  .page-enter-from {
    transform: translateY(5px);
    opacity: 0;
  }

  .page-enter-to {
    transform: translateY(0);
    opacity: 1;
  }

  .page-leave-from {
    transform: translateY(0);
    opacity: 1;
  }

  .page-leave-to {
    transform: translateY(-5px);
    opacity: 0;
  }
</style>
