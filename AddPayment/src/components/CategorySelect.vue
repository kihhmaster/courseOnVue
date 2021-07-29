<template>
  <div>
    <select v-model="selected">
      <option v-for="(option, idx) in category" :key="idx">
        {{ option }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "CategorySelect",
  props: {
    category: {
      type: Array,
      default: () => [],
    },

  },
	data() {
		return {
			selected: "",
		};
	},
};
</script>
<style scoped>
</style>