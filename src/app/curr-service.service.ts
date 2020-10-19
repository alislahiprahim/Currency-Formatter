import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CurrServiceService {

  constructor(private myHttpClient: HttpClient) { }

  getCurrency(base) {
    return this.myHttpClient.get(`https://api.exchangeratesapi.io/latest?base=${base}`)
  }
}
