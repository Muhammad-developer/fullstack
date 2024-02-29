<template>
  <div class="container-task">
    <div class="task">
      <h1>Новая задача № {{ taskNumber }}</h1>
      <form>
        <input type="text" name="" id="name" placeholder="Називание задачи">
        <input type="text" name="" id="status" placeholder="Статус задачи">
        <button type="button" :onclick="send">Создать</button>
      </form>
    </div>
  </div>
</template>
<script>

export default {
  data: () => {
    return {
      taskNumber: ""
    }
  },

  async mounted() {
    this.taskNumber = await this.$store.dispatch('getTasksLastId') + 1;
  },

  methods: {
    async send() {
      const name = document.getElementById('name').value;
      const status = document.getElementById('status').value;
      await this.$store.dispatch('setTask', { name, status });
      location.reload();
    }
  }
}


</script>

<style>
.container-task {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px;
}

.task {
  width: max-content;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
}

form {
  width: min-content;
  margin: 5px;
  padding: 5px;
  font-size: 18px;
  color: #ffffff;
}

.task form input {
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 10px;
  font-size: 16px;
  /* color: #fff; */
  padding: 10px;
  margin: 15px;
}

.task form button {
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 10px;
  font-size: 16px;
  /* color: #fff; */
  padding: 10px;
  /* margin: 15px; */
}

.task form button:hover {
  background: blue;
}

.task form input::placeholder {
  color: #ffffffd0;
}
</style>