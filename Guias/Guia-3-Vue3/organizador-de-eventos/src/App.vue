<template>
  <div id="app">
    <h1>Organizador de eventos</h1>

    <!-- Formulario para agregar nuevos invitados -->
    <form @submit.prevent="agregarInvitado">
      <input v-model="nuevoInvitado.nombre" placeholder="Nombre del invitado" />
      <select v-model="nuevoInvitado.genero">
        <option disabled value="">Selecciona género</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
      <button type="submit">Agregar Invitado</button>
    </form>

    <!-- Filtro de estado y género -->
    <div>
      <label>
        Filtro por estado:
        <select v-model="filtroEstado">
          <option value="">Todos</option>
          <option value="confirmado">Confirmados</option>
          <option value="pendiente">Pendientes</option>
        </select>
      </label>
      <label>
        Filtro por género:
        <select v-model="filtroGenero">
          <option value="">Todos</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </label>
    </div>

    <!-- Lista de invitados -->
    <h2>Lista de Invitados</h2>
    <ul>
      <li v-for="(invitado, index) in invitadosFiltrados" :key="index">
        {{ invitado.nombre }} ({{ invitado.genero }}) -
        <span :class="{'confirmado': invitado.confirmado, 'pendiente': !invitado.confirmado}">
          {{ invitado.confirmado ? 'Confirmado' : 'Pendiente' }}
        </span>
        <button class="btn-cambiarEstado" @click="alternarConfirmacion(invitado)">
          Cambiar estado
        </button>
      </li>
    </ul>

    <!-- Mostrar el contador de invitados confirmados -->
    <p>Total confirmados: {{ contadorConfirmados }}</p>

    <!-- Botón para mostrar/ocultar tareas pendientes -->
    <button @click="mostrarPendientes = !mostrarPendientes">
      {{ mostrarPendientes ? 'Ocultar' : 'Mostrar' }} pendientes
    </button>

    <ul v-show="mostrarPendientes">
      <li v-for="(invitado, index) in pendientes" :key="index">
        {{ invitado.nombre }} ({{ invitado.genero }})
      </li>
    </ul>

    <!-- Sección de votación para la temática del evento -->
    <h2>Votación para elegir la temática del evento</h2>
    <ul>
      <li v-for="(tema, index) in tematicas" :key="index">
        {{ tema.nombre }} - Votos: {{ tema.votos }}
        <button class="btn-votarPorTema" @click="votarPorTema(index)">Votar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoInvitado: { nombre: '', genero: '' },
      mostrarPendientes: true,
      filtroEstado: '',
      filtroGenero: '',
      invitados: [
        { nombre: 'Juan', genero: 'masculino', confirmado: true },
        { nombre: 'María', genero: 'femenino', confirmado: false },
      ],
      tematicas: [
        { nombre: 'Fiesta de disfraces', votos: 0 },
        { nombre: 'Fiesta tropical', votos: 0 },
        { nombre: 'Fiesta elegante', votos: 0 },
      ],
    };
  },
  computed: {
    invitadosFiltrados() {
      return this.invitados.filter(invitado => {
        const cumpleEstado =
          this.filtroEstado === '' ||
          (this.filtroEstado === 'confirmado' && invitado.confirmado) ||
          (this.filtroEstado === 'pendiente' && !invitado.confirmado);

        const cumpleGenero =
          this.filtroGenero === '' || invitado.genero === this.filtroGenero;

        return cumpleEstado && cumpleGenero;
      });
    },
    contadorConfirmados() {
      return this.invitados.filter(invitado => invitado.confirmado).length;
    },
    pendientes() {
      return this.invitados.filter(invitado => !invitado.confirmado);
    }
  },
  methods: {
    agregarInvitado() {
      if (this.nuevoInvitado.nombre !== '' && this.nuevoInvitado.genero !== '') {
        this.invitados.push({ ...this.nuevoInvitado, confirmado: false });
        this.nuevoInvitado = { nombre: '', genero: '' };
      }
    },
    alternarConfirmacion(invitado) {
      invitado.confirmado = !invitado.confirmado;
    },
    votarPorTema(index) {
      this.tematicas[index].votos++;
    }
  }
};
</script>

<style>
/* Estilo para el botón de agregar invitado */
button[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #065bb5;
}

/*Este cambia todos los botenes sin clase especifica */
button {
  background-color: #022256;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin: 0 5px;
}

/* Estilo para los botones de votación */
.btn-votarPorTema {
  background-color: #08afa1; /* Color de fondo amarillo */
  color: rgb(255, 255, 255); /* Color del texto */
  border: none; /* Sin borde */
  padding: 8px 16px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Puntero de mano al pasar el ratón */
  font-size: 14px; /* Tamaño del texto */
  transition: background-color 0.3s ease; /* Transición suave */
  margin: 0 5px; /* Espaciado horizontal entre botones */
}

/* Estilo para los botones de cambiar estado */
.btn-cambiarEstado {
  background-color: #9a28a7; /* Color de fondo verde */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  padding: 8px 16px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Puntero de mano al pasar el ratón */
  font-size: 14px; /* Tamaño del texto */
  transition: background-color 0.3s ease; /* Transición suave */
  margin: 0 5px; /* Espaciado horizontal entre botones */
}

button:hover {
  background-color: #0deadb;
}
.confirmado {
  color: green;
}
.pendiente {
  color: red;
}
</style>
