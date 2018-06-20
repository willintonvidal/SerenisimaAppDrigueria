<template>
  <div>

    <div class="row p-4">
      <div class="col-md-12">
        <h1 class="d-inline">Items</h1>
        <input type="text" v-model="search" placeholder="buscar medicamentos"/>
        <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary float-right mt-2">
          Create Item
        </router-link>
      </div>
    </div><br />

    <div class="table-responsive-sm">
    <table class="table table-striped table:hover table-bordered">
      <thead>
        <tr>
          <td>Item Name</td>
          <td>Item Price</td>
          <td>Descripción</td>
          <td>Usos</td>
          <td>Fecha Vencimiento</td>
          <td>Actions</td>
          
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in filteredItems">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ item.usos }}</td>
          <td>{{ item.fechaVencimiento }}</td>
          <td>
            <router-link :to="{ name: 'EditItem', params: {id: item._id} }" class="btn btn-primary">
              Edit
            </router-link>

            <button class="btn btn-danger" v-on:click="deleteItem(item._id)">
              Delete
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
        return item.name.toLowerCase().indexOf(this.search);
      });
    }
  }
}
</script>
