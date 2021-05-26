import {
  AppLoader
} from './apploader';
import {
  AuthGuard
} from './auth.guard';
import {
  UsersModule
} from './users/users.module';
import {
  SalesComponent
} from './sales/sales.component';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  ProductComponent
} from './product/product.component';
import {
  ProductDetailsComponent
} from './product-details/product-details.component';
import {
  CustomersModule
} from './customers/customers.module';

const routes: Routes = [{
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "products",
    component: ProductComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {
    path: "sales",
    component: SalesComponent
  },
  // Redirecting
  {
    path: "home",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  // Place hondered path routing(parameterised url routing)
  {
    path: "product/:id",
    component: ProductDetailsComponent
  },
  {
    path: "product/:id/:quantity",
    component: ProductDetailsComponent
  },
  {
    path: "cutomers",
    loadChildren: () => CustomersModule,
    canLoad: [AuthGuard]
  },
  {
    path: "users",
    loadChildren: () => UsersModule,
    data: {
      preload: true
    }

  },
  // For error matching or invalid path
  {
    path: "**",
    redirectTo: "/dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AppLoader
  })],
  exports: [RouterModule],
  providers: [AppLoader]
})
export class AppRoutingModule {}
