import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'
import { InstalacionesDthPage } from "../formularios/instalaciones-dth/instalaciones-dth"
import { InstalacionesHfcPage } from "../formularios/instalaciones-hfc/instalaciones-hfc"
import { MantencionHfcPage } from "../formularios/mantencion-hfc/mantencion-hfc"
import { MantencionDthPage } from "../formularios/mantencion-dth/mantencion-dth"
import { InstalacionesDthEntelPage } from "../formularios/instalaciones-dth-entel/instalaciones-dth-entel"
import { DesconexionPage } from "../formularios/desconexion/desconexion"
import { LoginPage } from "../../pages/login/login"
import { BafiEntelPage } from "../formularios/bafi-entel/bafi-entel"
import { DuoEntelPage } from "../formularios/duo-entel/duo-entel"

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {

  mostrarEntel = localStorage.getItem('empresa') == 'Entel'
  mostrarClaro = localStorage.getItem('empresa') == 'Claro'

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMenuPage')
  }

  goToInstalacionesHfc(){
    this.navCtrl.push(InstalacionesHfcPage)
  }

  goToInstalacionesDth(){
    this.navCtrl.push(InstalacionesDthPage)
  }

  goToInstalacionesDthEntel(){
    this.navCtrl.push(InstalacionesDthEntelPage)
  }

  goToMantencionHfc(){
    this.navCtrl.push(MantencionHfcPage)
  }

  goToMantencionDth(){
    this.navCtrl.push(MantencionDthPage)
  }

  goToDesconexion(){
    this.navCtrl.push(DesconexionPage)
  }

  goToBafiEntel(){
    this.navCtrl.push(BafiEntelPage)
  }

  goToDuoEntel(){
    this.navCtrl.push(DuoEntelPage)
  }

  logout(){
    localStorage.removeItem('userToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('empresa')
    localStorage.removeItem('lastLogin')
    this.navCtrl.setRoot(LoginPage)
    this.navCtrl.popToRoot()
  }

}
