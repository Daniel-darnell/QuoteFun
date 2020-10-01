import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quotes[]=[
    new Quotes(1, 'Bob AxelRod', 'Motivation', 'Hate is natures most perfect energy source its endlessly renewable ', 0, 0,),
    new Quotes(2, 'Bill Gates', 'Technology', 'Take our 20 best people away, and I will tell you that Microsoft will become an unimportant company', 0,0,),
    new Quotes(3, 'Chloe Azalea', 'Life', 'It does not matter where you are from, all that matters is where you are going!!.', 0, 0,),
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