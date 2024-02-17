    <script setup>
    import servicioAficiones from "@/servicios/personal/servicioAficiones";
    import { ref } from "vue";
    import { useRouter } from "vue-router";

// Utilizamos enrutamiento
const rutas = useRouter()
    
//Funcion de Iniciar

function iniciar(usuarioForm) {

    if (usuario !== "" && contrasenia !== "") {


        servicioAficiones.findByUsuario(window.btoa(usuario.value))
            .then((response) => {

                if (response.data.length === 0) {
                    alert("el usuario no existe")
                    localStorage.setItem("usuario", null)
                }
                else {
                    localStorage.setItem("usuario", usuario.value)

                    //Recargar Página
                    //Opción 1:  
                    //location.reload();

                    //Opción 2: 
                    rutas.go();


                }
                // console.log(response.data.length)
                //     alert("usuario correcto")

            })
            .catch((error) => {
                alert("usuario incorrecto")
                //console.log(error);
            })

    }


}

    let usuario=ref("")
    let contra=ref("")
    
    function enviar(params) {
        localStorage.setItem('usuario',usuario.value)
    }



    
    </script>

    <template>
        <form>  
        Nombre:  <input type="text" v-model="usuario" >
        contrasena:   <input type="text" :name="contra" >
        <button type="submit" @click="enviar()">anadir</button>
        </form>
    </template>
    <style scoped>
 form {
        width: 300px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

   
   

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    button[type="submit"] {
        width: 100%;
        padding: 10px;
        background-color: #3498db;
        border: none;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button[type="submit"]:hover {
        background-color: #2980b9;
    }
</style>