import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'appCurrency'
})
export class AppCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `₹ ${Number(value).toLocaleString('en-IN')}`
  }

}
