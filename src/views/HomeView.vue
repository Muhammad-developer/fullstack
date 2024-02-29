<template>
  <h1>Задачи</h1>
  <div class="container">
    <div class="date-filter">
      <div class="search-field">
        <input type="search" id="search" :onkeyup="search">
      </div>
      <input type="date" name="from" id="from">
      <input type="date" name="to" id="to">
      <div class="search">
        <button :onclick="filterByDate">Искать</button>
      </div>
    </div>

  </div>
  <div class="container">
    <div class="home">
      <table id="tasks" class="table">
        <thead>
          <tr>
            <th>Название задачи</th>
            <th>Статус</th>
            <th>Создано</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td v-for="i in item" :key="i.id">{{ i }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  el: '#tasks',
  data: () => {
    return {
      items: [],
      filters: []
    }
  },
  async mounted() {
    this.items = await this.$store.dispatch('getTasks');
  },
<<<<<<< finish

  methods: {
    async filterByDate() {
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;
      return this.items = await this.$store.dispatch('getFilterByDate', { from, to });
    },

    async search() {
      const text = document.getElementById('search').value;
      return this.items = await this.$store.dispatch('getFilterByStatus', { text });
    }
>>>>>>> fullstack
  }
}
</script>
<style>
body {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}

h1 {
  color: white;
}

.container {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px;
}

.home {
  width: max-content;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
}

.table {
  margin: 5px;
  padding: 5px;
  font-size: 18px;
  color: #ffffff;
}

.table thead th {
  padding: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  border-top: 2px solid #716561;
  border-bottom: 2px solid #716561;
}

.table tbody td {
  text-align: center;
  padding: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  border-top: 1px solid #716561;
}

.date-filter {
  width: max-content;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
}

.date-filter input {
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

.date-filter .search button {
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

.date-filter .search button:hover {
  background: blue;
}
</style>