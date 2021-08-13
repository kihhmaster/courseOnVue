<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <div class="menu">
			<router-link to="/dashboard">Dashboard </router-link>/
			<router-link to="/about">About </router-link>/
			<router-link to="/notfound">Not Found </router-link>/
      <!-- <a href="dashboard">Dashboard / </a>
      <a href="about">About / </a>
      <a href="notFound">Not Found / </a> -->
    </div>
    <main>
			<div class="content-page">
				<router-view/>
				<!-- <About v-if="page === 'about'"/>
				<Dashboard v-if="page === 'dashboard'"/>
				<NotFound v-if="page === 'notFound'"/> -->
			</div>


    </main>
  </div>
</template>

<script>

// import About from "./views/About.vue";
// import Dashboard from "./views/Dashboard.vue";
// import NotFound from "./views/NotFound.vue";


export default {
  name: "App",	
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap");
#app {
  font-family: "Otomanopee One", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
	text-decoration: none;
	color: cadetblue;
	&:hover{
		color: rgb(137, 172, 173);
	}
}
*{
	box-sizing: border-box;
}
</style>
