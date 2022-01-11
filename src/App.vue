<template>
  <div class="container">
    <h1>~~~Yuuchin's Kanban-style todo~~~</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html{
  background-color: darkgray;
}
#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
input, button{
  background-color: pink;
  border: none;
  margin:10px;
  padding:10px;
  border-radius: 10px;
}
input[type="text"], button:hover{
  box-shadow: inset 1px 2px 3px rgba(0,0,0,0.5);
}
button{
  box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
}
i{
  font-size: 0.7rem;
}
h1, p {
  margin:0;
  padding:0;
}
</style>
