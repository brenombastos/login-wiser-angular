import { LoginFailComponent } from './login-fail/login-fail.component';
import { LoginOkComponent } from './login-ok/login-ok.component';
import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'ok', component: LoginOkComponent },
    { path: 'fail', component: LoginFailComponent }
];



export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);