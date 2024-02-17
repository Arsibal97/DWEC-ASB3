import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/paginas/paginaInicio.vue";
import paginaListar from "@/paginas/paginaListar.vue";
import sobremi from "@/paginas/sobremi.vue";
import inicioSesion from "@/paginas/inicioSesion.vue";
const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes: [
        //Públicas
        {   path: '/', 
            name:'inicio',
            component: paginaInicio
        },  
        {   path: '/listado', 
            name:'listar',
            component: paginaListar
        }, 
        {   path: '/sobremi', 
        name:'sobrem',
        component: sobremi
    },
    {
        path: '/inicioSesion',
        name:'inicioSesion',
        component: inicioSesion
    } ,
        //Si se produce un error
        {
            path: '/:pathMatch(.*)*',
            redirect:() => ({ name:'inicio'})
        }
    ]

});

export default router;