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
import { InstalacionesHfcPage } from '../pages/formularios/claro/instalaciones-hfc/instalaciones-hfc';
import { InstalacionesDthPage } from '../pages/formularios/claro/instalaciones-dth/instalaciones-dth';
import { MantencionDthPage } from '../pages/formularios/claro/mantencion-dth/mantencion-dth';
import { MantencionHfcPage } from '../pages/formularios/claro/mantencion-hfc/mantencion-hfc';
import { DesconexionPage } from '../pages/formularios/claro/desconexion/desconexion';
import { InstalacionesDthEntelPage } from '../pages/formularios/entel/instalaciones-dth-entel/instalaciones-dth-entel';
import { BafiEntelPage } from '../pages/formularios/entel/bafi-entel/bafi-entel';
import { DuoEntelPage } from '../pages/formularios/entel/duo-entel/duo-entel';
import { NoFormsComponent } from "../components/no-forms/no-forms";
import { ModalInstalacionesDthPage } from '../pages/formularios/claro/instalaciones-dth/modal-instalaciones-dth/modal-instalaciones-dth';
import { ModalInstalacionesHfcPage } from '../pages/formularios/claro/instalaciones-hfc/modal-instalaciones-hfc/modal-instalaciones-hfc';
import { ModalMantencionDthPage } from '../pages/formularios/claro/mantencion-dth/modal-mantencion-dth/modal-mantencion-dth';
import { ModalDesconexionPage } from '../pages/formularios/claro/desconexion/modal-desconexion/modal-desconexion';
import { ModalBafiPage } from '../pages/formularios/entel/bafi-entel/modal-bafi/modal-bafi';
import { ModalDuoPage } from '../pages/formularios/entel/duo-entel/modal-duo/modal-duo';
import { ModalInstalacionesDthEntelPage } from '../pages/formularios/entel/instalaciones-dth-entel/modal-instalaciones-dth-entel/modal-instalaciones-dth-entel';

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
    NoFormsComponent,
    ModalInstalacionesDthPage,
    ModalInstalacionesHfcPage,
    ModalMantencionDthPage,
    ModalMantencionDthPage,
    ModalDesconexionPage,
    ModalBafiPage,
    ModalDuoPage,
    ModalInstalacionesDthEntelPage
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
    DuoEntelPage,
    ModalInstalacionesDthPage,
    ModalInstalacionesHfcPage,
    ModalMantencionDthPage,
    ModalMantencionDthPage,
    ModalDesconexionPage,
    ModalBafiPage,
    ModalDuoPage,
    ModalInstalacionesDthEntelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicorpApiProvider
  ]
})
export class AppModule {}
