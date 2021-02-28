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
            initialization: { value: 0, disabled: true }
          },
          submit: {
            name: 'submit',
            type: 'text',
            label: 'Get Money',
            initialization: { value: '', disabled: false }
          }
        }
      },
      features: {
        left: [
          {
            image: {
              src: 'assets/images/04payment/payment.png', alt: 'Disbursement'
            },
            title: 'Quick Cash Disbursement',
            description: 'Get terms loans that your business needs within 72 hrs'
          },
          {
            image: {
              src: 'assets/images/06interest/interest.png', alt: 'Interest'
            },
            title: 'Low-interest rate',
            description: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'
          },
          {
            image: {
              src: 'assets/images/08paperwork/paperwork.png', alt: 'Paperwork'
            },
            title: 'Zero Paperwork',
            description: 'Get started instantly by submitting only your basic details & bank statements'
          }
        ],
        right: [
          {
            image: {
              src: 'assets/images/05freelancer/freelancer.png', alt: 'Freelancer'
            },
            title: 'Ace your business finances',
            description: 'Manage banking, accounting & everything in between, on one platform'
          },
          {
            image: {
              src: 'assets/images/07covid/covid.png', alt: 'Covid'
            },
            title: 'Loans to fight COVID-19',
            description: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'
          }
        ]
      },
      account: {
        title: 'Boost your business with Open',
        description: 'Get your hand on a term loan that\'s crafted for your business',
        button: 'Get an Open Account'
      }
    }
    this._assets$.next(this._assets)
  }

  watchAssets$(): Observable<HomeModel> {
    return this._assets$.asObservable()
  }
}
