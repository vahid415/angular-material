import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: [ './virtual-scroll.component.sass' ]
})
export class VirtualScrollComponent implements OnInit {
  dateControl: string;
  title = 'Angular 7 – Virtual Scrolling feature';
  scrollItems: number[] = [];
  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.scrollItems.push(index);
    }
  }

  ngOnInit(): void {
  }

}
