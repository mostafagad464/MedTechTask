import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../_models/person';

@Pipe({
  name: 'getAgeUsingDoB'
})
export class GetAgeUsingDoBPipe implements PipeTransform {

  transform(date:Date): number {
    let result:number = 0
    let today: Date = new Date();
    console.log("date: "+date);
    console.log("today: "+today);

    // result = (today.getFullYear() - date.getFullYear());
    result = (today.getUTCFullYear() - date.getUTCFullYear());
    return result;
  }

}
