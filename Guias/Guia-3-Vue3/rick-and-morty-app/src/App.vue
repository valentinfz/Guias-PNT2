<template>
  <div id="app">
    <h1>Rick and Morty Characters</h1>
    <input v-model="search" placeholder="Search for a character" />
    <ul>
      <li v-for="character in filteredCharacters" :key="character.id">
        {{ character.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const characters = ref([]);
    const search = ref('');

    // 3. Llamado a la API de Rick and Morty
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      characters.value = data.results.slice(0, 50); // Obtener solo los primeros 50 personajes
    };

    // 4. Ejecutar la función al montar el componente
    onMounted(() => {
      fetchCharacters();
    });

    // 5. Computed property para filtrar personajes por nombre
    const filteredCharacters = computed(() => {
      return characters.value.filter(character =>
        character.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    return {
      search,
      filteredCharacters
    };
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  font-size: 18px;
}
</style>
