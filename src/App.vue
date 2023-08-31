<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="60"
      height="60"
    />

    <nav>
      <RouterLink to="/">Demo <i class="fa fa-code"></i></RouterLink>
      <RouterLink to="/sobre">Sobre <i class="fa fa-info"></i></RouterLink>
      <!-- <RouterLink to="/sandbox">Sandbox <i class="fa fa-vial"></i></RouterLink> -->
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
}

.logo {
  display: block;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  font-size: 18px;
  position: relative;
  top: -15px;
}

.fa-code{
  font-size: 15px !important;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
