import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { LoginPage } from "../pages/login/login";
import { ServicorpApiProvider } from '../providers/servicorp-api/servicorp-api';
import { InstalacionesHfcPage } from '../pages/formularios/instalaciones-hfc/instalaciones-hfc';
import { InstalacionesDthPage } from '../pages/formularios/instalaciones-dth/instalaciones-dth';
import { MantencionDthPage } from '../pages/formularios/mantencion-dth/mantencion-dth';
import { MantencionHfcPage } from '../pages/formularios/mantencion-hfc/mantencion-hfc';
import { DesconexionPage } from '../pages/formularios/desconexion/desconexion';
import { InstalacionesDthEntelPage } from '../pages/formularios/instalaciones-dth-entel/instalaciones-dth-entel';
import { BafiEntelPage } from '../pages/formularios/bafi-entel/bafi-entel';
import { DuoEntelPage } from '../pages/formularios/duo-entel/duo-entel';
import { NoFormsComponent } from "../components/no-forms/no-forms";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MainMenuPage,
    InstalacionesHfcPage,
    InstalacionesDthPage,
    MantencionDthPage,
    MantencionHfcPage,
    DesconexionPage,
    InstalacionesDthEntelPage,
    BafiEntelPage,
    DuoEntelPage,
    NoFormsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MainMenuPage,
    InstalacionesHfcPage,
    InstalacionesDthPage,
    MantencionDthPage,
    MantencionHfcPage,
    DesconexionPage,
    InstalacionesDthEntelPage,
    BafiEntelPage,
    DuoEntelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicorpApiProvider
  ]
})
export class AppModule {}
