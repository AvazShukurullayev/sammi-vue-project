<template>
  <div class="login text-center">
    <section class="form-signin mt-5 w-50 m-auto">
      <form>
        <h1 class="h3 mb-3 text-center fw-normal">Login</h1>

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
        <Button type="submit">Login</Button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style></style>
