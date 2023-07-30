<template>
  <ul class="list-group" style="margin: 0; padding: 0; list-style: none">
    <li
      v-for="errorMessage in errorMessages"
      :key="errorMessage"
      class="list-group-item-danger my-1"
    >
      {{ errorMessage }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ValidationError",
  props: {
    validationErrors: {
      type: Object,
      requird: true,
    },
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map((name) => {
        const msg = this.validationErrors[name].join(", ");
        return `${name} ${msg}`;
      });
    },
  },
};
</script>

<style></style>
