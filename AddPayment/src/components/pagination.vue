<template>
  <div :class="[$style.wrp]">
    <div @click="onClick(cur - 1)">-</div>
    <div
      v-for="i in amount" :key="i"
      :class="{
        [$style.active]: cur === i
      }"
      @click="onClick(i)"
    >{{ i }}</div>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    n: Number,
    cur: Number
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.n)
    }
  },
  methods: {
    onClick (p) {
      if (p < 1 || p > this.amount) {
        return
      }
      this.$emit('paginate', p)
    }
  }
}
</script>

<style module lang="scss">
.wrp {
	margin: 20px;
  display: flex;
	align-items: center;
	justify-content: center;
	
  & > div {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 20px;
		width: 20px;
		padding: 5px;
		margin: 5px;
		align-self: center;
		&:hover {
			background: cadetblue;
		}

    &.active {
      background: #ccc;
    }
  }
}
</style>
<style lang="scss">
.paginat__button {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #ccc;
	height: 20px;
	width: 20px;
	&:hover {
		background: cadetblue;
	}
}

</style>