import React from "react";
import Home from '../views/App/Home'
import AboutUs from '../views/App/AboutUs'
import Gallery from '../views/App/Gallery'
import Contact from '../views/App/Contact'
import NewsList from '../views/App/NewsList'
import EntitiesList from '../views/App/EntitiesList'
import BusinessesList from '../views/App/BusinessesList'

import News from '../views/App/News'
import Entity from '../views/App/Entity'
import Business from '../views/App/Business'

import Login from '../views/Auth/Login'
import Register from '../views/Auth/Register'

import BusinessRegister from '../views/Admin/BusinessRegister'
import EntityRegister from '../views/Admin/EntityRegister'

import NotFound from '../views/App/NotFound'

export const mainRoutes = [
    {
        path: '/',
        tag: 'inicio',
        component: <Home />,
        name: 'Inicio'
    },
    {
        path: '/nosotros',
        tag: 'nosotros',
        component: <AboutUs />,
        name: 'Sobre nosotros'
    },
    {
        path: '/galeria',
        tag: 'galeria',
        component: <Gallery />,
        name: 'Galería'
    },
    {
        path: '/contacto',
        tag: 'contacto',
        component: <Contact />,
        name: 'Contacto'
    },
    {
        path: '/noticias',
        tag: 'noticias',
        component: <NewsList />,
        name: 'Noticias'
    },
    {
        path: '/noticias/:id',
        tag: 'noticia',
        component: <News />,
        name: 'Noticia'
    },
    {
        path: '/entidades',
        tag: 'entidades',
        component: <EntitiesList />,
        name: 'Entidades'
    },
    {
        path: '/entidades/:id',
        tag: 'entidad',
        component: <Entity />,
        name: 'Entidad'
    },
    {
        path: '/comercios',
        tag: 'comercios',
        component: <BusinessesList />,
        name: 'Comercios'
    },
    {
        path: '/comercios/:id',
        tag: 'comercio',
        component: <Business />,
        name: 'Comercio'
    },
    {
        path: '/404',
        tag: '404',
        component: <NotFound />,
        name: '404'
    },
    {
        path: '/admin/registro',
        tag: 'registro',
        component: <Register />,
        name: 'Registro'
    },
    {
        path: '/admin/login',
        tag: 'login',
        component: <Login />,
        name: 'Login'
    },
    {
        path: '/admin/registro/comercio',
        tag: 'registro comercio',
        component: <BusinessRegister />,
        name: 'Registro comercio'
    },
    {
        path: '/admin/registro/entidad',
        tag: 'registro entidad',
        component: <EntityRegister />,
        name: 'Registro entidad'
    }
]
