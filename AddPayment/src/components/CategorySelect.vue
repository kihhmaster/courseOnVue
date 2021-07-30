<template>
  
	<select v-model="selected">
		<option v-for="(option, idx) in categories" :key="idx">
			{{ option }}
		</option>
	</select>
  
</template>
<script>
export default {
  name: "CategorySelect",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },

  },
	data() {
		return {
			selected: "Food",
		};
	},
};
</script>
<style scoped>
</style>