import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class CurrencyPipe implements PipeTransform {
 
  transform(value:number)
  {
    return value.toLocaleString('en-IN',{style:'currency',currency:'INR',currencyDisplay:'symbol'})
  }
 
  // transform(value: number,arg:number):any {
  //  if(arg == 1)
  //  {
  //  return value.toLocaleString('en-IN',{ style: 'currency', currency: "INR",currencyDisplay:'code' });
  //  }else{
  //   return  value.toLocaleString('en-IN',{ style: 'currency', currency: "USD",maximumFractionDigits:1 });
  //  }
  // }
}


