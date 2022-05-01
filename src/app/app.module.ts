import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
<<<<<<< Updated upstream
import {ReactiveFormsModule} from "@angular/forms";
=======
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
>>>>>>> Stashed changes
import {MatInputModule} from "@angular/material/input";
import { RegisterComponent } from './components/register/register.component';
import { ForgotYourPasswordComponent } from './components/forgot-your-password/forgot-your-password.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
<<<<<<< Updated upstream
=======
import { AccountComponent } from './components/account/account.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import { EditPersonalDataComponent } from './components/edit-personal-data/edit-personal-data.component';
import { AddedFavoritesDialogComponent } from './components/added-favorites-dialog/added-favorites-dialog.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: 'forgotYourPassword', component: ForgotYourPasswordComponent},
<<<<<<< Updated upstream
  { path: 'home', component: HomeComponent}
=======
  { path: 'home', component: HomeComponent},
  { path: 'account', component: AccountComponent},
  { path: 'account/edit-data', component: EditPersonalDataComponent},
  { path: 'favorites', component: FavoritesComponent}
>>>>>>> Stashed changes
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotYourPasswordComponent,
    HomeComponent,
<<<<<<< Updated upstream
    NavBarComponent
=======
    NavBarComponent,
    AccountComponent,
    EditPersonalDataComponent,
    AddedFavoritesDialogComponent,
    FavoritesComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
<<<<<<< Updated upstream
    RouterModule.forRoot(routes)
=======
    RouterModule.forRoot(routes),
    MatSlideToggleModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
