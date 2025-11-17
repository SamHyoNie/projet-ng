import { Routes } from '@angular/router';
//import { Home } from './home/home'; 1ere méthode de chargement


export const routes: Routes = [
    {
        path: 'home',
        //component: Home, 1ere méthode de chargement
        loadComponent: () => import('./home/home').then(m => m.Home) //2eme méthode de chargement
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'text-interpolation',
        loadComponent: () => import('./lesson/text-interpolation/text-interpolation').then(m => m.TextInterpolation)
    },
    {
        path: 'property-binding',
        loadComponent: () => import('./lesson/property-binding/property-binding').then(m => m.PropertyBinding)
    },
    {
        path: 'property-attribute-binding',
        loadComponent: () => import('./exercice/property-attribute-binding/property-attribute-binding').then(m => m.PropertyAttributeBinding)
    },
    {
        path: '**',
        loadComponent:()=>import('./shared/not-found/not-found').then(m=>m.NotFound)
    }
];
