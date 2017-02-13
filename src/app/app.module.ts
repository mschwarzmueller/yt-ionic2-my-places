import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPlacePage } from "../pages/new-place/new-place";
import { PlacesService } from "../services/places.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, PlacesService]
})
export class AppModule {}
