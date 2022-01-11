<template>
  <section>
    <div>
      <h1>New Todo</h1>
      <hr>
      <todo-create />
    </div>
    <div>
      <h1>Pending Todo's</h1>
      <hr>
      <todo-list />
    </div>

    <div>
      <h1>Done</h1>
      <hr>
      <todo-list />
    </div>
  </section>
</template>

<script>
import TodoCreate from "@/components/TodoCreate.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Home",
  components: {
    TodoCreate,
    TodoList,
  },
};
</script>

<style scoped>
section{
  display:flex;
  justify-content: space-evenly;
  align-items: center;
}
div{
  width:30vw;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.7);
  height: 90vh;
  overflow: scroll;
}

/* Hide scrollbar for Chrome, Safari and Opera */
div::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
div {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>