import { Component, OnInit, Self } from '@angular/core';
import { HierarchyService } from '../hierarchy.service';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss'],
  providers: [HierarchyService]
})
export class InternalComponent implements OnInit {

  // o self implementa apenas a instancia do proprio componente, mesmo que haja um injeto no root, se
  // nao for passado a dependencia dara erro
  constructor(@Self() private hierarchyService: HierarchyService) { }

  ngOnInit(): void {
    this.hierarchyService.hierarchy()
  }

}
