import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  keyword = '';
  isHighlight = false;
  fontSize = 24;

  @Output() keywordSearch = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  search(event: MouseEvent): void {
    console.log(event);
    this.keywordSearch.emit(this.keyword);
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;

    if (event.altKey) {
      console.log('test');
    }
  }
}
