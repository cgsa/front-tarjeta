<template>
  <header class="masthead">
    <div class="container">
      <div class="masthead-subheading">Bienvenido a contacto Garantido!</div>
      <div>
        <p>Último ingreso: {{lastPersonal}}</p>
        <p>Hora: {{entryDate}}</p>
      </div>      
      <input      
        v-if="!isSubmitting"  
        v-model="code"
        @keyup.capture="setEntryPersonal"
        ref="code"
        type="text"
        name="code"
      />
      <button @click="setEntryPersonal">Enviar</button>
    </div>
  </header>
</template>
<script>
import { setEntry } from "@/api/modules/entry.api";
export default {
  name: "Home",
  data() {
    return {
      isSubmitting: false,
      code: "",
      result: "",
      lastPersonal: "",
      entryDate: ""
    };
  },
  mounted() {
    //this.form.email.focus();
    this.$refs["code"].focus();
    const _this = this;
    setInterval(function() {
      _this.$refs["code"].focus();
    },8000);
  },
  methods: {
    setLastEntry()
    {
      this.code = "";
      this.$refs["code"].focus();
      this.entryDate = this.$moment(this.result.data.transaccion.created_at).format('DD/MM/YYYY h:mm:ss');
      this.lastPersonal = this.result.data.usuario.nombre +' '+ this.result.data.usuario.apellido;
    },
    async setEntryPersonal() {

      const _this = this;
      if (this.code.length < 10) {
        return false;
      }

      this.isSubmitting = true;
      const data = { "code-search": this.code, 'ip-host': window.location.origin };

      try {
          
          this.result = await setEntry(data);
          if(typeof this.result !== undefined){
            setTimeout(() => {
              this.setLastEntry()
            }, 100);
          }  
      } catch (error) {
        
        this.$notify({
          group: "foo",
          type: "error",
          title: error.data.message,
          duration: 6000,
        });

      } finally {        
        this.isSubmitting = false;
        this.code = "";
        //_this.$refs["code"].focus();
      }
    },
  },
};
</script>
