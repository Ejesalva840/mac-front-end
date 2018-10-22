import { APP_ROUTES } from './app-routes';
import { CustomMaterialModuleModule } from './custom-material-module/custom-material-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SideBarComponent } from './navigation/side-bar/side-bar.component';
import { CheckInStudentComponent } from './navigation/check-in-student/check-in-student.component';
import { StudentDetailsComponent } from './navigation/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavigationComponent,
    CheckInStudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModuleModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
