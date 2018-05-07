import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `<input [id]="searchInputId" type="search" [placeholder]="placeholderText" (keyup.enter)="search($event)" /> `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchInputId: string = null;
  @Input() placeholderText: string = 'Search...';
  @Output() searching: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  search(event: any) {
    this.searching.emit(event.target.value);
  }

}
