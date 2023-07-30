<template>
  <div class="register text-center">
    <section class="form-signin mt-5 w-50 m-auto">
      <form>
        <h1 class="h3 mb-3 text-center fw-normal">Register</h1>

        <Input
          :type="'text'"
          :labelFor="'floatingName'"
          :placeholder="'Name'"
          :label="'Name'"
        />
        <Input
          class="my-3"
          :type="'email'"
          :labelFor="'floatingInput'"
          :placeholder="'name@example.com'"
          :label="'Email address'"
        />
        <Input
          class="my-3"
          :type="'password'"
          :labelFor="'floatingPassword'"
          :placeholder="'Password'"
          :label="'Password'"
        />
        <Button type="submit" @click="registerHandler" :disabled="isLoading">
          Register
        </Button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    registerHandler(e) {
      e.preventDefault();
      this.$store.dispatch("register");
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
};
</script>

<style></style>
