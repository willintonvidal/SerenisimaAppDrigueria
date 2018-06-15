<template>
  <div>
    <h1>Registra un medicamento o producto.....</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nombre producto:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Precio:</label>
            <input type="number" class="form-control col-md-6" v-model="item.price">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Descripción:</label>
            <textarea class="form-control" rows="4" v-model="item.descripcion"></textarea>
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Usos</label>
            <input type="text" class="form-control col-md-6" v-model="item.usos">
          </div>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Fecha Vencimiento:</label>
            <input type="text" class="form-control" v-model="item.fechaVencimiento">
          </div>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Fecha Ingreso</label>
            <input type="text" class="form-control col-md-6" v-model="item.fechaIngreso">
          </div>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>tabletasTotal:</label>
            <input type="text" class="form-control" v-model="item.tabletasTotal">
          </div>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>cuantas Tabletas tiene un sobre:</label>
            <input type="text" class="form-control col-md-6" v-model="item.cuanTabletasSobre">
          </div>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Cuantos sobres tiene una caja</label>
            <input type="text" class="form-control" v-model="item.cuanSobresCaja">
          </div>
        </div>
      </div> -->
      <div class="form-group">
        <button class="btn btn-primary">Agregar producto..</button>
      </div>
    </form>
  </div>
</template>

<script>
  import toastr from 'toastr';

  export default {
    data(){
      return{
        item:{}
      }
    },
    methods: {
      addItem(){
        let uri = 'http://localhost:4000/items/add';
        this.axios.post(uri, this.item).then((response) => {
          console.log(response);
          toastr.success(response.data.item, 'Es correcto....');
          this.$router.replace({ name: 'DisplayItem'})
        });
      }
    }
  }
  </script>
