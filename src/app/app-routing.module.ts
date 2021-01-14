import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page/main-page.component';
import {FormComponent} from './main-page/form/form.component';
import {TableComponent} from './main-page/table/table.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/main-page', pathMatch: 'full'},
    {path: 'main-page', component: MainPageComponent},

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}