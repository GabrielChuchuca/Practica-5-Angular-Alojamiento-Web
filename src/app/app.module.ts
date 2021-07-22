import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { WsJeeService } from './services/ws-jee.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WsJeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
