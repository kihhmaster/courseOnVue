<template>
  <div class="wrapp-input">
    <div class="wrapp-add__data" >
      <input
        type="date"
        class="input-add__data"
        v-model="date"
        placeholder="Date"
      />
      <CategorySelect
        @addDataSelected="addDataSelected"
        :categories="categories"
      />
      <input
        class="input-add__data"
        v-model.number="value"
        type="number"
        placeholder="Value"
      />
      <button class="button-add__data" @click="onclick">Edit Data +</button>
    </div>
    <!-- <button class="button-addData__show" @click="addDataShow()">
      Add new Cost +
    </button> -->
  </div>
</template>
<script>
import CategorySelect from "./CategorySelect.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EditPayment",
  data() {
    return {
      date: "",
      category: "",
      value: null,
      show: true,
    };
  },
  components: {
    CategorySelect,
  },
  methods: {
    goToPageDashboard() {
      this.$router.push({
        name: "dashboard",
      });
    },
    ...mapActions(["fetchCategory"]),
    addDataSelected(data) {
      this.category = data.selected;
    },
    // addDataShow() {
		// 	const buttonShow = document.querySelector(".button-addData__show");
		// 	console.log(buttonShow)
    //   if (this.show == true) {
    //     this.show = false;
    //     buttonShow.style.background = "#35495e";
    //     buttonShow.style.width = "30px";
    //     buttonShow.innerText = "X";
    //   } else {
    //     this.show = true;
    //     this.date = "";
    //     this.category = "";
    //     this.value = null;
    //     buttonShow.style.width = "150px";
    //     buttonShow.style.background = "cadetblue";
    //     buttonShow.innerText = "Add new Cost +";
    //   }
    // },
    onclick() {
      const { category, value } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value,
      };
      if (this.getValueQueryFromRoute && this.getCategoryParamsFromRoute) {
        this.$store.commit("addDataToPaymentsList", data);
        this.goToPageDashboard();
        return;
      }
      this.$emit("addNewPayment", data);
    },
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentList",
      categories: "getCategoryList",
    }),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },

    getValuetQueryFromRoute() {
      return Number(this.$route.query?.value) ?? null;
    },
    getCategoryParamsFromRoute() {
      return this.$route.params?.category ?? null;
    },
  },
  created() {
    if (!this.category.length) {
      this.fetchCategory();
    }
    if (
      (!this.getValueQueryFromRoute || !this.getCategoryParamsFromRoute) &&
      this.$route.name !== "dashboard"
    ) {
      this.goToPageDashboard();
    }
    this.category = this.getCategoryParamsFromRoute;
    this.value = this.getValuetQueryFromRoute;
  },
};
</script>

<style lang="scss">
.wrapp-add__data {
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  & > div > select {
    margin-bottom: 10px;
    height: 32px;
    border: 1px solid rgb(185, 185, 185);
    width: 100%;
    &::placeholder {
      color: rgb(185, 185, 185);
    }
  }
}
.input-add__data {
  margin-bottom: 10px;
  height: 30px;
  border: 1px solid rgb(185, 185, 185);
  &::placeholder {
    color: rgb(185, 185, 185);
  }
}
.button-add__data {
  height: 30px;
  width: 150px;
  align-self: flex-end;
  margin: 5px;
  background: cadetblue;
  border: none;
  border-radius: 5px;
  color: #fff;
}
.wrapp-input {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-addData__show {
  height: 30px;
  width: 150px;
  align-self: flex-start;
  margin: 5px;
  background: cadetblue;
  border: none;
  border-radius: 5px;
  color: #fff;
}
</style>