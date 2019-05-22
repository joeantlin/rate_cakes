import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) {}
    getCakes(){
      return this._http.get('/cakes');
    }
    newCake(newcake){
        return this._http.post('/cake', newcake);
    }
    newReview(id, newreview){
        return this._http.put('/review/'+id, newreview);
    }
}
