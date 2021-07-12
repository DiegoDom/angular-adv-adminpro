import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
      {
        title: 'Dashboard',
        icon : 'mdi mdi-gauge',
        path: '/',
        children: [
          { title: 'Main', path: '/' },
          { title: 'Chart', path: 'charts' },
          { title: 'Progress', path: 'progress' },
          { title: 'Promesas', path: 'promises' },
          { title: 'RXJS', path: 'rxjs' }
        ]
      }
  ];

  constructor() { }
}
