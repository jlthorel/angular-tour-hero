import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablecomp',
  templateUrl: './tablecomp.component.html',
  styleUrls: ['./tablecomp.component.css']
})
export class TablecompComponent implements OnInit {
  tableTitle : string = 'Table Title'
  constructor() { }

  ngOnInit(): void {
  }

}
