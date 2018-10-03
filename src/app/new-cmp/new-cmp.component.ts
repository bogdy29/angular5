import { Component, OnInit } from '@angular/core';
import PrismicDOM from 'prismic-dom';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  PrismicDOM = PrismicDOM;

  constructor() { }

  ngOnInit() {
  }

}
