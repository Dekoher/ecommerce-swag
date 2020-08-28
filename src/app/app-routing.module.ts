import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        component: ContactComponent
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
