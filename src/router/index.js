import Vue from "vue";
import VueRouter from "vue-router";
import Contacto from "@/views/Contacto";
import Articulo from "@/views/Articulo";
import SobreMi from "@/views/SobreMi";
import UltimoPost from "@/views/UltimoPost";
import SobreMi1 from "@/views/Tran/SobreMi1";
import Contacto1 from "@/views/Tran/Contacto1";
import NotFound from "@/views/NotFound";
import Post from "@/views/Post";
import RutasInexistentes from "@/views/RutasInexistentes";
import Administrador from "@/views/Administrador";
import Simple from "@/views/Administrador/Simple";
import Avanzado from "@/views/Administrador/Avanzado";

Vue.use(VueRouter);

const routes = [
  {
    path: "/contacto",
    name: "Contacto",
    alias: ["/contactame"],
    component: Contacto
  },
  {
    path: "/",
    name: "Articulo",
    alias: ["/home", "/inicio", "/portada"],
    component: Articulo
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
    children: [
      {
        path: ":id",
        component: Articulo
      }
    ]
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    alias: ["/acerca"],
    component: SobreMi,
    children: [
      {
        path: "sobremi1",
        name: "SobreMi1",
        component: SobreMi1
      },
      {
        path: "contacto1",
        name: "Contacto1",
        component: Contacto1
      }
    ]
  },
  {
    path: "/post/:id",
    name: "Ultimopost",
    component: UltimoPost
  },
  {
    path: "/rutasinexistentes",
    name: "RutasInexistentes",
    component: RutasInexistentes
  },
  {
    path: "/administrador",
    name: "Administrador",
    component: Administrador,
    children: [
      {
        path: "simple",
        name: "Simple",
        component: Simple
      },
      {
        path: "avanzado",
        name: "Avanzado",
        component: Avanzado
      }
    ]
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
