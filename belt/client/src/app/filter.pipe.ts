import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './game'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listings: Array<Game>, filterText: string): Array<Game> {
    if(!filterText){ return listings }
    
        filterText = filterText.toLowerCase()
      
        return listings.filter(game => game.name.toLowerCase().includes(filterText))
      }
    
  }


