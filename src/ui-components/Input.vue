<template>
  <div class="form-floating">
    <input
      :type="type"
      class="form-control"
      :id="labelFor"
      :placeholder="placeholder"
      @input="updateInput"
      :value="modelValue"
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
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style></style>
