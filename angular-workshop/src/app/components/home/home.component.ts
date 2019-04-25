import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: any[] = [];

  constructor(private marvel: MarvelService) {

   }

  ngOnInit() {
    console.log('waiting for results');
    this.marvel.getCharacters().subscribe(results => {
      console.log(results);
      this.characters = results;
    });
  }

  onSearch(searched: string){
    if(searched.trim() == ''){
      this.marvel.getCharacters().subscribe(results => {
        console.log(results);
        this.characters = results;
      });
    }
    else{
      this.marvel.searchCharacter(searched).subscribe(results => {
        console.log(results);
        this.characters = results;
      });
    }
  }
}
