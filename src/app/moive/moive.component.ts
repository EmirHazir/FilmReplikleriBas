import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-moive',
  templateUrl: './moive.component.html',
  styleUrls: ['./moive.component.css']
})
export class MoiveComponent {

  readonly quotesPath = "quotes";
  
    formMoiveQuote: MoiveQuote = {
      'quote': '',
      'moive': ''
    };
  
    moiveQuotesStram: FirebaseListObservable<MoiveQuote[]>;
    constructor(db: AngularFireDatabase) {
      this.moiveQuotesStram = db.list(this.quotesPath);
    }

  onSubmit(): void {
    if(this.formMoiveQuote.$key){
      this.moiveQuotesStram.update(this.formMoiveQuote.$key, this.formMoiveQuote);
    }else{
      this.moiveQuotesStram.push(this.formMoiveQuote);
    }
    
    this.formMoiveQuote = {
      'quote': '',
      'moive': ''
    }
  }

  edit(moiveQuote: MoiveQuote): void {
    this.formMoiveQuote = moiveQuote;
  }

  remove(moiveQuoteKey: string): void{
    this.moiveQuotesStram.remove(moiveQuoteKey);
  }


}