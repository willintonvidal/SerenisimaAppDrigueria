<template>
  <div>
    <h1>Mostrando los usuarios</h1>
    <div class="row p-4">
      <div class="col-md-12">
        <h1 class="d-inline">Items</h1>
        <router-link :to="{ name: 'CreateUsu' }" class="btn btn-primary float-right mt-2">
          Registrarse
        </router-link>
      </div>
    </div><br />
    <div class="table-responsive-sm">
    <table class="table table-striped table:hover table-bordered">
      <thead>
        <tr>
          <td>Nombre:</td>
          <td>Apellido:</td>
          <td>correo:</td>
          <td>Celular:</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items">
          <td>{{ item.name }}</td>
          <td>{{ item.apellido }}</td>
          <td class="overflow:auto">{{ item.correo }}</td>
          <td>{{ item.celular }}</td>
          <td>
            <router-link :to="{ name: 'EditUsuario', params: {id: item._id} }" class="btn btn-default" aria-label="Left Align">
              <span class="oi oi-cog">Edit</span>
            </router-link>

            <button class="btn btn-danger" v-on:click="deleteItem(item._id)">
              <span class="oi oi-cog">X</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items: []
    }
  },

  created: function()
  {
    this.fetchItems();
  },

  methods: {
    fetchItems()
    {
      let uri = 'https://serenisima.herokuapp.com/usuario/Mostrarusuarios';   
      this.axios.get(uri).then((response) => {
        this.items = response.data;
      });
    },
    deleteItem(id)
    {
      const response = confirm('Estas seguro que deseas eliminar?');
      if (response) {
        let uri = 'https://serenisima.herokuapp.com/usuario/eliminarusu/'+id;
        this.items.splice(id, 1);
        this.axios.get(uri);
      }
    }
  }

    }
  

</script>
