<template>
  <div>

    <div class="row p-4">
      <div class="col-md-12">
        <input type="text" v-model="search" class="form-control" placeholder="BUSCAR POR DESCRIPCION"/>
      </div>
    </div><br />

    <div class="table-responsive-sm">
    <table class="table table-striped table:hover table-bordered">
      <thead>
        <tr>
          <td>Nombre producto</td>
          <td>Precio</td>
          <td>Descripción</td>
          <td>Actions</td>
          
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in filteredItems">
          <td><router-link :to="{ name: 'ItemInfo', params: {id: item._id} }">{{ item.name }}</router-link></td>
          <td>${{ item.price }}</td>
          <td>{{ item.descripcion }}</td>
          <td>
            <router-link :to="{ name: 'EditItem', params: {id: item._id} }" class="btn btn-primary">
              Editar
            </router-link>

            <button class="btn btn-danger" v-on:click="deleteItem(item._id)">
              Eliminar
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
      items: [],
      search:''
    }
  },

  created: function()
  {
    this.fetchItems();
  },

  methods: {
    fetchItems()
    {
      let uri = 'https://serenisima.herokuapp.com/items';
      this.axios.get(uri).then((response) => {
        this.items = response.data;
      });
    },
    deleteItem(id)
    {
      const response = confirm('are you sure you want to delete?');
      if (response) {
        let uri = 'https://serenisima.herokuapp.com/items/delete/'+id;
        this.items.splice(id, 1);
        this.axios.get(uri);
      }
    }
  },
  computed:{
    filteredItems: function(){
      return this.items.filter((item) =>{
        return item.descripcion.toLowerCase().match(this.search);
      });
    }
  }
}
</script>
