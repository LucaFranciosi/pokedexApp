import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/custom-validators/custom-validator';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})


export class LoginFormComponent {
  type: string = '';
  form: FormGroup = new FormGroup({});
  innerText: string = '';
  isOpen: boolean = false;

  handleClick() {
    this.type === "password" ? this.type = "text" : this.type = "password";
    this.isOpen =!this.isOpen;
  }
  loginButtonClick() {
    
   }



  ngOnInit(): void {
    this.form = this.createForm();
    this.innerText = "Username"
    this.type = "password"
    this.isOpen = false;
  }


  createForm() {
    return new FormGroup({
      email: new FormControl(null, { validators: [Validators.required, Validators.email,], updateOn: 'blur' }
      ),

      password: new FormControl(null, {
        validators: [
          Validators.required,
          CustomValidator.patternValidator(/\d/, { hasNumber: true, }),
          CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
          CustomValidator.patternValidator(
            /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true }),
          Validators.minLength(6),
          Validators.maxLength(20)

        ],
      }),
    }, { updateOn: 'change' })
  }






}
