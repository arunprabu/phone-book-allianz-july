import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {


  transform(value: any, args?: any): any {
    if(args){
      value = value.substr(0, args);
    }else{
      value = value.substr(0, 24);
    }
    
    return value + "...";
  }

  
}
