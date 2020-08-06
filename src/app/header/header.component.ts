import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  keyword = '';
  isHighlight = false;
  fontSize = 24;

  constructor() {}

  ngOnInit(): void {}

  search(event: MouseEvent): void {
    console.log(event);
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;

    if (event.altKey) {
      console.log('test');
    }
  }
}
