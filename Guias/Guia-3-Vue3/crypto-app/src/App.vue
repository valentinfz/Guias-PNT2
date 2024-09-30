<template>
  <div id="app">
    <h1>Top 10 Cryptocurrencies</h1>
    
    <label for="sort">Sort by: </label>
    <select v-model="sortKey">
      <option value="rank">Ranking</option>
      <option value="name">Name</option>
    </select>

    <ul>
      <li 
        v-for="(crypto, index) in sortedCryptos" 
        :key="crypto.id" 
        :class="{ 'top-3': index < 3 }"
      >
        <span>{{ crypto.rank }}. {{ crypto.name }} ({{ crypto.symbol }})</span>
        <span :class="changeColorClass(crypto.changePercent24Hr)">
          {{ crypto.changePercent24Hr }}%
          <span v-if="crypto.changePercent24Hr > 0">🔼</span>
          <span v-else>🔽</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const cryptos = ref([]);
    const sortKey = ref('rank');

    const fetchCryptos = async () => {
      const response = await fetch('https://api.coincap.io/v2/assets?limit=10');
      const data = await response.json();
      cryptos.value = data.data;
    };

    onMounted(() => {
      fetchCryptos();
    });

    const sortedCryptos = computed(() => {
      return [...cryptos.value].sort((a, b) => {
        if (sortKey.value === 'name') {
          return a.name.localeCompare(b.name);
        }
        return a.rank - b.rank;
      });
    });

    const changeColorClass = (changePercent24Hr) => {
      return changePercent24Hr > 0 ? 'positive' : 'negative';
    };

    return {
      sortKey,
      sortedCryptos,
      changeColorClass
    };
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

select {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-3 {
  background-color: #f0f8ff;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
</style>
