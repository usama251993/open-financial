import { Component, Input, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { HomeModel } from 'src/app/core/models/home/app-home.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _assets$: BehaviorSubject<HomeModel> = new BehaviorSubject<HomeModel>(null)

  @Input()
  set assets(value: HomeModel) { this._assets$.next(value) }
  get assets(): HomeModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
