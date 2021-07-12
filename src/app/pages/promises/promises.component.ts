import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* const promesa = new Promise((resolve, reject) => {
      if (false) {
        resolve('Hola mundo');
      } else {
        reject('Algo salio mal');
      }
    });

    promesa.then((msg) => {
      console.log(msg)
    })
    .catch((err) => {
      console.error(err);
    });

    console.log('Fin del init'); */
    this.getUsers()
    .then(users => console.log(users));
  }

  getUsers() {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then((resp) => resolve(resp.data));
    });

  }

}
