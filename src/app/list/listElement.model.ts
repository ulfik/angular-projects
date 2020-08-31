export class ListElement {
  public name: string;
  public gender: string;
  public age: number;
  public quote?: string;
  public img?: string;
  public id: string;
  public edited?: boolean | string;

  constructor(
    name: string,
    gender: string,
    age: number,
    quote: string,
    img: string,
    id: string,
    edited: boolean | string
  ) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.quote = quote;
    this.img = img;
    this.id = id;
    this.edited = edited;
  }
}
