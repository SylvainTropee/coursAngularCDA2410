import { Routes } from '@angular/router';
import {Mod5demo1} from './mod5/mod5demo1/mod5demo1';
import {Mod5demo1About} from './mod5/mod5demo1-about/mod5demo1-about';
import {Mod5demo1Detail} from './mod5/mod5demo1-detail/mod5demo1-detail';
import {authGuard} from './mod5/auth-guard';

export const routes: Routes = [
  {path : '', component : Mod5demo1},
  {path : 'about-us', component : Mod5demo1About},
  {path : 'detail/:id', component : Mod5demo1Detail, canActivate : [authGuard]},
];
