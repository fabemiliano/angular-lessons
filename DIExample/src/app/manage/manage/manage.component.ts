import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../services/manage.service';
import { HierarchyService } from '../hierarchy.service';

class InternalServiceAlternative {
  hierarchy() {
    console.log('external')
  }
}

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  providers: [
    {provide: HierarchyService, useClass: InternalServiceAlternative }
  ]
})
export class ManageComponent implements OnInit {

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
    this.manageService.manage()
  }

}
