import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces',
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    const [character] = args;
    return value.replace(character, ' ');
  }
}
