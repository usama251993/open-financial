import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { HomeModel } from '../../models/home/app-home.model'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _assets$: BehaviorSubject<HomeModel> = new BehaviorSubject<HomeModel>(null)

  private _assets: HomeModel

  constructor() { }

  fetchAssets(): void {
    this._assets = {
      navbar: {
        logo: {
          src: 'assets/images/01logo/logo.png',
          alt: 'Open Financial Logo'
        },
        menuItems: ['Products', 'Solutions', 'Pricing'],
        login: 'Login',
        getStarted: 'Get Started'
      },
      banner: {
        title: 'We make it Super Simple',
        image: {
          src: 'assets/images/03home/home.png',
          alt: 'Banner Image'
        },
        dots: {
          src: 'assets/images/10dots/dots.svg',
          alt: 'Banner Image'
        }
      },
      account: {
        title: 'Boost your business with Open',
        description: 'Get your hand on a term loan that\'s crafted for your business',
        button: 'Get an Open Account'
      },
      calculator: {
        assets: {
          form: {
            title: 'Eligibility Calculator',
            repayment: [
              { value: 3, viewValue: '3 Months' },
              { value: 6, viewValue: '6 Months' },
              { value: 12, viewValue: '12 Months' },
              { value: 18, viewValue: '18 Months' },
              { value: 24, viewValue: '24 Months' },
            ]
          },
          summary: {
            loan: 'Loan Amount',
            emi: 'Your EMI will be'
          }
        },
        form: {
          income: {
            name: 'income',
            type: 'text',
            label: 'Monthly Income',
            initialization: { value: 0, disabled: true },
            min: 100000,
            max: 300000
          },
          expense: {
            name: 'expense',
            type: 'text',
            label: 'Monthly Expense',
            initialization: { value: 0, disabled: true },
            min: 0,
            max: 300000
          },
          repayment: {
            name: 'repayment',
            type: 'text',
            label: 'Repayment Tenure',
            initialization: { value: 6, disabled: false }
          },
          loans: {
            name: 'loans',
            type: 'checkbox',
            label: 'Do you have any existing loans?',
            initialization: { value: false, disabled: false }
          },
          emi: {
            name: 'emi',
            type: 'number',
            label: 'EMI of existing loans (optional)',
            initialization: { value: 0, disabled: false }
          },
          submit: {
            name: 'submit',
            type: 'text',
            label: 'Get Money',
            initialization: { value: '', disabled: false }
          }
        }
      }
    }
    this._assets$.next(this._assets)
  }

  watchAssets$(): Observable<HomeModel> {
    return this._assets$.asObservable()
  }
}
