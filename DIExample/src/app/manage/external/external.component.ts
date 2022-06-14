import { Component, OnInit, SkipSelf } from '@angular/core';
import { HierarchyService } from '../hierarchy.service';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss'],
  providers: [HierarchyService]
})
export class ExternalComponent implements OnInit {

  // o serviço foi declarado no componente, e deveria retornar 'internal' porém por conta do skipself
  //será implementado o serviço do componente pai que possui um useClass que mostra o valor external
  constructor(@SkipSelf() private hierarchyService: HierarchyService) { }

  ngOnInit(): void {
    this.hierarchyService.hierarchy()
  }

}
