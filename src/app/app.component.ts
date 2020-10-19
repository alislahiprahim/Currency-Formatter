import { Component } from '@angular/core';
import { CurrServiceService } from './curr-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rates: any
  s_curren: any = 'USD';
  t_current: any = 'USD';
  old_num: any
  new_num: any


  constructor(private myCurrServiceService: CurrServiceService) { }


  ngOnInit(): void {
    this.myCurrServiceService.getCurrency('USD').subscribe((resp: any) => {
      console.log(resp)
      this.rates = resp.rates
    })
  }

  get_currency(base) {
    this.myCurrServiceService.getCurrency(base).subscribe((resp: any) => {
      console.log(resp)

      this.rates = resp.rates
    })

  }


  selectedCurr(event) {
    this.s_curren = event.target.value
    this.get_currency(this.s_curren)
  }

  to_Curr(event) {
    this.t_current = event.target.value
  }

  OnEnter(event) {
    this.old_num = event.target.value

    if (this.t_current != this.s_curren) {
      const toCurrency = this.t_current
      this.new_num = this.old_num * this.rates[toCurrency]
    }else{
      this.new_num = this.old_num 

    }

  }
}

