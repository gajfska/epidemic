import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page/main-page.component';
import {DetailsPageComponent} from './details-page/details-page.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/main-page', pathMatch: 'full'},
    {path: 'main-page', component: MainPageComponent},
    {path: 'details-page', component: DetailsPageComponent},

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}