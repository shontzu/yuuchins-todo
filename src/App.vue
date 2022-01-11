<template>
  <div class="container">
    <router-view />
    <footer> special shoutout to <a href="https://shorturl.at/ahFX5">Ngeo Jia Jun</a> </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html {
  background-image: url("../src/assets/bg-home-garden.png");
  background-position: center; 
  background-repeat: no-repeat; 
}
#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
input,
button {
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  margin: 2px;
  padding: 10px;
  border-radius: 10px;
}
input[type="text"],
button:hover {
  box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.5);
}
button {
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
}
i {
  font-size: 0.7rem;
}
h1,
p {
  margin: 0;
  padding: 0;
}
footer{
  position: fixed;
  width:100%;
  bottom:0;
  text-align: center;
}
</style>
