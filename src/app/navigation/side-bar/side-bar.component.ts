import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() sideBarNavComponent: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  closeSideNav(): void {
    this.sideBarNavComponent.close();
  }

}
