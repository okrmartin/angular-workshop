import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searched = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(search: string){
    this.searched.emit(search);
  }
}
