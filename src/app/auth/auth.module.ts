import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { LoginFormComponent } from './partial/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RegistrationFormComponent } from './partial/registration-form/registration-form.component';
  


@NgModule({
  declarations: [
    AuthComponent, LoginFormComponent, RegistrationFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AuthComponent }
    ])
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
