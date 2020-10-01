import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quotes[]=[
    new Quotes(1, 'Alex Otieno', 'Web Hosting', 'Website of all kinds are posted on cloud to facilitate many to access', 0, 0,),
    new Quotes(2, 'Phoebe Gichui', 'Tech and life', 'For a list of all the ways technology has failed to improve the quality of life, please press three', 0,0,),
    new Quotes(3, 'Timothy Munene', 'Technology', 'Technology the knack of so arranging that we don’t have to experience it.', 0, 0,),
  ]

  completeGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    // quote.likes = quoteLength;
    this.quote.push(quote);
  }

  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
