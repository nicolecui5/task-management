import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, item: string, check: boolean, args?: any): any {
    if(value === undefined || value.length ===0){
      return value;
    }
    else if(!check){
      value.sort((a: any, b: any)=>{
      if(a[item]< b[item]){
        return -1;
      }
    })
    return value
  }
  else if(check){
    value.sort((a:any, b:any)=>{
      if(a[item]>b[item]){
        return -1;
      }
    })
    return value
  }
}
}
