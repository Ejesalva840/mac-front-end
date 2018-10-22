import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [ CommonModule ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatListModule
  ],
  declarations: []
})
export class CustomMaterialModuleModule { }