import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { MemoeryComponent } from './memory.component';
import { RxjsOperatorsDemoComponent } from './app.RxjsOperatorsDemo';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'memory', component: MemoeryComponent},
    { path: 'Rxjsdemo', component: RxjsOperatorsDemoComponent}
];