import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";


interface MoiveQuote {
  quote: string;
  moive: string;
  $key?: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  readonly quotesPath = "quotes";

  formMoiveQuote: MoiveQuote = {
    'quote': '',
    'moive': ''
  };

  // moiveQuotes: Array<MoiveQuote> =[
  //   {"moive":"Şaban Oğlu Şaban","quote":"Eşşek Oğlu Eşşek"},
  //   {"moive":"17-25","quote":"Babacım saat kaç"},
  //   {"moive":"Gezi","quote":"Sis atma o.ç"},
  // ]

  moiveQuotesStram: FirebaseListObservable<MoiveQuote[]>;
  constructor(db: AngularFireDatabase) {
    this.moiveQuotesStram = db.list(this.quotesPath);
  }

  onSubmit(): void {
    //this.moiveQuotes.unshift(this.formMoiveQuote); //push yerine unshift;)
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
    //console.log("Edit",moiveQuote);
    this.formMoiveQuote = moiveQuote;
  }

  //delete the moive and quote
  remove(moiveQuoteKey: string): void{
    this.moiveQuotesStram.remove(moiveQuoteKey);
  }

}
