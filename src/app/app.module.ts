import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ConditionalClassesComponent } from './components/conditional-classes/conditional-classes.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    ConditionalClassesComponent,
    NgIfComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
