import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';


@NgModule({
  imports: [ CommonModule ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: []
})
export class CustomMaterialModuleModule { }
