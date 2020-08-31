import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ListElement } from './listElement.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ListComponent implements OnInit {
  listElements: ListElement[] = [];
  filterBy: string;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listElements = this.listService.getElementsList();
    this.listService.listElementsChanged.subscribe(
      (listElements: ListElement[]) => (this.listElements = listElements)
    );
  }

  onListElementAdded(formData: ListElement): void {
    this.listService.addListElement(formData);
  }

  filterGender(gender: string): void {
    this.filterBy = gender;
  }
}
