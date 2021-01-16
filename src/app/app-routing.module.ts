import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page/main-page.component';
import {DetailsPageComponent} from './details-page/details-page.component';
import {SimulationsComponent} from './simulations/simulations.component';
import {SimulationStartComponent} from './simulations/simulation-start/simulation-start.component';
import {SimulationEditComponent} from './simulations/simulation-edit/simulation-edit.component';
import {SimulationDetailComponent} from './simulations/simulation-detail/simulation-detail.component';
import {SimulationsResolverService} from './simulations/simulations-resolver.service';


const appRoutes: Routes = [
//     {path: '', redirectTo: '/main-page', pathMatch: 'full'},
//     {path: 'main-page', component: MainPageComponent},
//     {path: 'details-page', component: DetailsPageComponent, children: [
//             {path: 'sim-detail/:id', component: SimulationDetailsComponent},
//             {path: ':id/edit', component: SimulationEditComponent},
//         ]},
//

    { path: '', redirectTo: '/simulations', pathMatch: 'full' },

    {
        path: 'simulations',
        component: SimulationsComponent,
        children: [
            { path: '', component: SimulationStartComponent },
            { path: 'new', component: SimulationEditComponent },
            {
                path: ':id',
                component: SimulationDetailComponent,
                resolve: [SimulationsResolverService]
            },
            {
                path: ':id/edit',
                component: SimulationEditComponent,
                resolve: [SimulationsResolverService]
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}