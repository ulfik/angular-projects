import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayOfObjectsFilter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, key: any, objectValue: any): any {
    if (!value.length || !objectValue) {
      return value;
    }
    return value.filter((element) => element[key] === objectValue);
  }
}
