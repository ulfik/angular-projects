import { ListElement } from './listElement.model';
import { Subject } from 'rxjs';

export class ListService {
  listElementsChanged = new Subject<ListElement[]>();
  private listElements: ListElement[] = [
    new ListElement(
      'Geralt',
      'male',
      100,
      'Zaraza',
      'https://66.media.tumblr.com/8f610f9d4300de02d11eb1cceaf69cfa/tumblr_pk7uk98uBf1qfwb05o5_250.png',
      '0',
      false
    ),
    new ListElement(
      'Ciri',
      'female',
      25,
      null,
      'https://external-preview.redd.it/khUkrJhEh-GYQvfCDyptT_olFsL-9s3fOYmIIKRkHcI.png?auto=webp&s=d08b77e0265f121d670f806fea040b4f6cfbf653',
      '1',
      false
    ),
  ];

  getElementsList(): Array<ListElement> {
    return this.listElements.slice();
  }

  private getElementIndex(elementId: string): number {
    const element: ListElement = this.listElements.find(
      ({ id }) => elementId === id
    );
    return this.listElements.indexOf(element);
  }

  deleteListElement(id: string): void {
    const index: number = this.getElementIndex(id);
    this.listElements.splice(index, 1);
    this.listElementsChanged.next(this.listElements.slice());
  }

  addListElement(data: ListElement): void {
    this.listElements.push(data);
    this.listElementsChanged.next(this.listElements.slice());
  }

  updateListElement(data: ListElement): void {
    const index = this.listElements.findIndex(({ id }) => id === data.id);
    const date = Date();
    this.listElements[index] = { ...data, edited: date };
    this.listElementsChanged.next(this.listElements.slice());
  }
}
