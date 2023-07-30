<template>
  <div class="register text-center">
    <section class="form-signin mt-5 w-50 m-auto">
      <form>
        <h1 class="h3 mb-3 text-center fw-normal">Register</h1>
        <ValidationError
          v-if="validationErrors"
          :validationErrors="validationErrors"
        />
        <Input
          :type="'text'"
          :labelFor="'floatingName'"
          :placeholder="'Name'"
          :label="'Name'"
          v-model="username"
        />
        <Input
          class="my-3"
          :type="'email'"
          :labelFor="'floatingInput'"
          :placeholder="'name@example.com'"
          :label="'Email address'"
          v-model="email"
        />
        <Input
          class="my-3"
          :type="'password'"
          :labelFor="'floatingPassword'"
          :placeholder="'Password'"
          :label="'Password'"
          v-model="password"
        />
        <Button type="submit" @click="registerHandler" :disabled="isLoading">
          Register
        </Button>
      </form>
    </section>
  </div>
</template>

<script>
import ValidationError from "./ValidationError.vue";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  components: { ValidationError },
  methods: {
    registerHandler(e) {
      e.preventDefault();
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", payload)
        .then((user) => {
          console.log("USER => ", user);
          this.$router.push({ name: "home" });
        })
        .catch((err) => console.log("ERROR => ", err));
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
    validationErrors() {
      return this.$store.state.auth.errors;
    },
  },
};
</script>

<style></style>
