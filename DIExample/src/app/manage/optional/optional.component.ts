import { Component, Injectable, OnInit, Optional, SkipSelf } from '@angular/core';
import { HierarchyService } from '../hierarchy.service';

class NonExistingService {
  hierarchy() {
    console.log('nao existe')
  }
}

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss'],
})
export class OptionalComponent implements OnInit {

  // o optional evita que de um InjectNull error quando nao encontra o injetor na árvore
  
  constructor(@Optional() private hierarchyService: NonExistingService) { }

  ngOnInit(): void {
    console.log(this.hierarchyService ? 'achou' : 'náo achou')
  }

}
