import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Products } from './views/products/products';
import { ProductDetail } from './views/product-detail/product-detail';
import { Contact } from './views/contact/contact';
export const routes: Routes = [
    {
        path: "", 
        component: Home},
    {
        path:"Productos",
        component:Products
    },
    {
        path: "producto-detalle/:id",
        component:ProductDetail
    },
    {path: "contacto",
        component: Contact
    }
];
