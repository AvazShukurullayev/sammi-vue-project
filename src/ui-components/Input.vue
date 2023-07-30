<template>
  <div class="form-floating">
    <input
      :type="type"
      class="form-control"
      :id="labelFor"
      :placeholder="placeholder"
    />
    <label :for="labelFor">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: String,
    labelFor: String,
    placeholder: String,
    label: String,
  },
};
</script>

<style></style>
