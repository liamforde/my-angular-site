import {Component, OnInit} from '@angular/core';
import {J4b2bService} from '../../core/services/j4b2b.service';

@Component({
  selector: 'app-home',
  template: `
    {{ schema | async }}
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
    schema;
  constructor(private j4B2BService: J4b2bService) { }

  ngOnInit() {
    this.schema = this.j4B2BService.getSchema();
  }

}
