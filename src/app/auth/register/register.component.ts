import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { fnpasswordsIguales } from 'src/app/directives/fn-passwords-iguales.directive';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['Diego Dom', [Validators.required, Validators.minLength(3)]],
    email: ['ddominguez@test.com', [Validators.required, Validators.email] ],
    password: ['tgod14', [ Validators.required, Validators.minLength(6) ]],
    password2: ['tgod14', [ Validators.required, Validators.minLength(6) ]],
    terminos: [ false, Validators.required ]
  }, {
    validators: fnpasswordsIguales
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  crearUsuario(): void {
    this.formSubmitted = true;

    if (!this.registerForm.valid) {
      return;
    }

    if (!this.registerForm.get('terminos')?.value) {
      this.registerForm.get('terminos')?.markAsTouched();
      return;
    }

    this.usuarioService.crearUsuario(this.registerForm.value)
    .subscribe(() => {
      this.router.navigateByUrl('/');
    }, (err) => {
      Swal.fire({
        title: 'Lo sentimos!',
        text: err.error.msg,
        icon: 'error'
      });
    });
  }

  campoNoValido(campo: string): boolean {
    return this.registerForm.get(campo)?.invalid && this.formSubmitted ? true : false;
  }

  validarTerminos(): boolean {
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  contrasenasNoValidas(): boolean {

    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ((pass1 !== pass2) && this.formSubmitted) {
      return true;
    } else {
      return false;
    }

  }

}
