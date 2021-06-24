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
          { title: 'Progress', path: 'progress' },
          { title: 'Chart', path: 'charts' }
        ]
      }
  ];

  constructor() { }
}
