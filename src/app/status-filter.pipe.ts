import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
    name: 'statusFilter',
    pure: false
})
export class StatusFilterPipe implements PipeTransform {

  transform(items: Item[], filter: string): any[] {
      if(!items || !filter) {
          return items;   
      } else {
        return items.filter((item: Item) => item.currentStatus === filter);      
      }
  }

}
