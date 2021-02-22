import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent }

];



export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);