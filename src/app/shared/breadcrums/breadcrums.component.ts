import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {

  public title!: string;
  public titleSubs$: Subscription;

  constructor(private router: Router) {
    this.titleSubs$ = this.getRouteData()
    .subscribe(({ title }) => {
      this.title = title;
      document.title = `AdminPro | ${ title }`;
    });
  }

  getRouteData() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
    );
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

}
