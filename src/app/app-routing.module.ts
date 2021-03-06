import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBidingComponent } from './event-biding/event-biding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ParentOfComponentInteractionComponent } from './parent-of-component-interaction/parent-of-component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TypescriptExoComponent } from './typescript-exo/typescript-exo.component';
import { ApiUsersComponent } from './api-users/api-users.component';
import { ApiUserDetailComponent } from './api-user-detail/api-user-detail.component';






const routes: Routes = [
  { path: 'interpolation', component: InterpolationComponent},
  { path: 'propertybinding', component: PropertyBindingComponent},
  { path: 'classbinding', component: ClassBindingComponent},
  { path: 'stylebinding', component: StyleBindingComponent},
  { path: 'eventbinding', component: EventBidingComponent},
  { path: 'twowaybinding', component: TwoWayBindingComponent},
  { path: 'componentinteraction', component: ComponentInteractionComponent},
  { path: 'parentofcomponentinteraction', component: ParentOfComponentInteractionComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'employee-list', component: EmployeeListComponent},
  { path: 'employee-detail/:id', component: EmployeeDetailComponent},
  { path: 'typescript-exo', component: TypescriptExoComponent},
  { path: 'api-users', component: ApiUsersComponent},
  { path: 'api-user-detail/:id', component: ApiUserDetailComponent},
  { path: '**', component:   PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// tslint:disable-next-line: max-line-length
// ici on crée une const qu'on importera dans app.module.ts afin d'évite de surcharger les declarations de components dans le ngModule, grace à ça, il suffit d'importer tout les modules ici uniquements
export const routingComponents = [
  InterpolationComponent,
  PropertyBindingComponent,
  ClassBindingComponent,
  StyleBindingComponent,
  EventBidingComponent,
  TwoWayBindingComponent,
  ComponentInteractionComponent,
  ParentOfComponentInteractionComponent,
  PipesComponent,
  EmployeeListComponent,
  EmployeeDetailComponent,
  PageNotFoundComponent,
  TypescriptExoComponent,
  ApiUsersComponent,
  ApiUserDetailComponent
 ];
