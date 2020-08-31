import {
  Component,
  Inject,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ListService } from '../list.service';
import { ModalComponent } from '../../common/modal/modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ListElement } from '../listElement.model';
import { EditFormComponent } from '../edit-form/edit-form.component';
@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListElementComponent implements OnInit {
  @Input() element: ListElement;

  constructor(private listService: ListService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  getBorderColor = (): string =>
    this.element.gender === 'male' ? 'blueBorder' : 'pinkBorder';

  openDeleteModal(id: string, name: string): void {
    const modalReference: MatDialogRef<ModalComponent> = this.dialog.open(
      ModalComponent,
      {
        data: { name },
      }
    );

    modalReference
      .afterClosed()
      .subscribe((result) => result && this.listService.deleteListElement(id));
  }

  openEditModal(element: ListElement): void {
    const editModalReference = this.dialog.open(EditFormComponent, {
      data: { element },
    });
    editModalReference
      .afterClosed()
      .subscribe(
        (result) => this.listService.updateListElement(result)
      );
  }
}
