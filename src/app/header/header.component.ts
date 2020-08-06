import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  keyword = '';

  constructor() {}

  ngOnInit(): void {}

  search(event: MouseEvent): void {
    console.log(event);

    if (event.altKey) {
      console.log('test');
    }
  }
}
