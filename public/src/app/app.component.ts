import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    cakes: object[];
    newCake: object;
    newReview: object;

    constructor(private _httpService: HttpService){}
    ngOnInit(){
        this.getCakesFromService()
        this.newCake = { baker: "", image: "" }
        this.newReview= { rating: 5, comment: "I love your cake!" }
    }
    getCakesFromService(){
        let tempObservable = this._httpService.getCakes();
        tempObservable.subscribe(data => {
            console.log("Got our cakes!", data)
            this.cakes = data['cake'];
        });
    }
    createCake(){
        let cakeObservable = this._httpService.newCake(this.newCake);
        cakeObservable.subscribe(data => {
            console.log("Added cake", data)
            this.getCakesFromService()
        });
    }
    addReview(id: string){
        // parseInt(this.newReview['rating'])
        console.log(this.newReview)
        let reviewObservable = this._httpService.newReview(id, this.newReview);
        reviewObservable.subscribe(data => {
            console.log("Added Review", data)
            this.getCakesFromService()
        });
    }
    ratingAvg(data){
        let sum: number = 0;
        let avg: number;
        let len =  data.reviews.length;
        for (var x = 0; x < len; x++){
            sum += data.reviews[x].rating;
        }
        avg = sum / len;
        return avg;
    }
}
