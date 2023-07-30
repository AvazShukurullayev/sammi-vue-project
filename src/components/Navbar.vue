<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom"
  >
    <RouterLink
      :to="{ name: 'home' }"
      class="d-flex align-items-center text-dark text-decoration-none"
    >
      <b class="fs-4">Sammi</b>
    </RouterLink>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <RouterLink
        class="me-3 py-2 text-dark text-decoration-none"
        :to="{ name: 'login' }"
      >
        Login
      </RouterLink>
      <RouterLink
        class="me-3 py-2 text-dark text-decoration-none"
        :to="{ name: 'register' }"
      >
        Register
      </RouterLink>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "Navbar",
};
</script>

<style></style>
