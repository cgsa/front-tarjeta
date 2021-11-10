<template>
  <header class="masthead">
    <div class="container">
      <div class="masthead-subheading">Bienvenido a contacto Garantido!</div>
      <div class="masthead-subheading text-uppercase">Control de Acceso</div>
      <div class="masthead-subheading text-uppercase">Último ingreso: {{lastPersonal}}</div>
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
      lastPersonal: ""
    };
  },
  mounted() {
    //this.form.email.focus();
    this.$refs["code"].focus();
  },
  methods: {
    setLastEntry()
    {
      console.log(window.location.origin);
      this.code = "";
      this.$refs["code"].focus();
      this.lastPersonal = this.result.data.usuario.nombre +' '+ this.result.data.usuario.apellido;
    },
    async setEntryPersonal() {
      if (this.code.length < 10) {
        return false;
      }

      this.isSubmitting = true;
      const data = { "code-search": parseInt(this.code), 'ip-host': window.location.origin };

      try {
          
          this.result = await setEntry(data);
          if(typeof this.result !== undefined){
            setTimeout(() => {
              this.setLastEntry()
            }, 100);
          }  
          //this.lastPersonal = this.result.nombre +' '+ this.result.apellido;
          //location.reload(true)
      } catch (error) {
        console.log(error);
        this.$notify({
          group: "foo",
          type: "error",
          title: 'Error',
          duration: 6000,
        });
      } finally {        
        this.isSubmitting = false;
      }
    },
  },
};
</script>
