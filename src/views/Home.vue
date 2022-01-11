<template>
  <section>
    <div>
      <h1>New Todo</h1>
      <hr>
      <todo-create/>
    </div>
    <div>
      <h1>Pending Todo's</h1>
      <hr>
      <todo-list />
    </div>

    <div>
      <h1>Done</h1>
      <hr>
      <done-list />
    </div>
  </section>
</template>

<script>
import TodoCreate from "@/components/TodoCreate.vue";
import TodoList from "@/components/TodoList.vue";
import DoneList from "@/components/DoneList.vue";

export default {
  name: "Home",
  components: {
    TodoCreate,
    TodoList,
    DoneList,
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
  background-color: rgba(255,255,255,0.6);
  color:black;
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

@media only screen and (max-width: 700px) {
  section {
    display:block;
  }
  div{
    width:100vw;
    height: 50vh;
    margin-bottom:50px;
  }
}
</style>