import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ActivationEnd, Router, RouterEvent, ROUTER_CONFIGURATION } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-rota-c',
  templateUrl: './rota-c.component.html',
  styleUrls: ['./rota-c.component.scss'],
  providers: []
})

export class RotaCComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  // constructor(@Inject(ROUTER_CONFIGURATION) private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route)
    console.log(this.router)

    const a: ActivatedRouteSnapshot = this.route.snapshot // ActivatedRouteSnapshot é uma classe que náo é injetada, age como se fosse interface
    console.log(new ActivationEnd(a))
    console.log(a)
    console.log(a.params)
    this.route.params.subscribe(console.log)
    console.log(this.route.component)
    console.log(this.route)

    console.log(this.route.params) // observable
    console.log(this.route.snapshot.params) // propriedade
    console.log(a.paramMap.has('id')) //paramMap é no formato de estrutura de dados, isto [e, tem méstodos específicos como o has]

    // this.router.navigate(['../rotaA'])
    this.router.events.pipe(
   ).subscribe((e) => {
     console.log('teste', e)
   });

   console.log(this.router.routerState) // contem o verdadeiro path da rota
   console.log(this.route.url.subscribe(console.log))
   console.log(this.route.data.subscribe(console.log))
  }

}
