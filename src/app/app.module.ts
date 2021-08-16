import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import Fire
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
     AngularFireDatabaseModule,
     AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
