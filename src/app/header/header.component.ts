import { Component, OnInit } from '@angular/core';

import { SelectItem} from "primeng";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: SelectItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'Manage', value:null},
      {label:'Save Data', value:{}},
      {label:'Fetch Data', value:{}},
    ];
  }

}
