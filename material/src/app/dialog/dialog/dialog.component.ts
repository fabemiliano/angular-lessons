import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal/modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true, direction: 'ltr' },
    },
  ],
})
export class DialogComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    const config = {};

    const dialog = this.dialog.open(ModalComponent, {
      maxHeight: '300px',
      width: '400px',
      data: { name: 'austin' },
      backdropClass: 'backdropBackground',
    });

    console.log(dialog.disableClose);
    console.log(dialog.id);
    console.log(dialog.componentInstance);

    dialog.afterClosed().subscribe(() => console.log('fechou'));
  }
}
