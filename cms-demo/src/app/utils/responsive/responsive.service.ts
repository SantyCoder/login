import { Injectable } from '@angular/core';
import { CONFIG } from '../../name-app';
@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  /**
  * @property {boolean} Bandera para conocer la plataforma actual
  * @public
  * @default Siempre se considera que no es móvil
  */
  mobile = false;
  /**
  * @property {string} Nombre del dispositivo físico actual
  * @public
  * @default Siempre se considera vacío
  */
  device = '';
  /**
  * @property {number} Densidad de pixel de la pantalla del dispositivo
  * @public
  */
  ratio = window.devicePixelRatio;
  /**
  * @property {number} Alto de la pantalla del dispositivo
  * @public
  */
  device_height = screen.height;
  /**
  * @property {number} Ancho de la pantalla del dispositivo
  * @public
  */
  device_width = screen.width;
  /**
   * @property {number} Alto de la ventana del dispositivo
   * @public
   */
  height = window.innerHeight;
  /**
   * @property {number} Ancho de la ventana del dispositivo
   * @public
   */
  width = window.innerWidth;
  /**
    * @property {string} Orientación del dispositivo LANDSCAPE|PORTRAIT
    * @public
    * @default De inicio se considera CONFIG.ORIENTATION.PORTRAIT 
    */
  orientation = CONFIG.ORIENTATION.PORTRAIT
  /**
    * @property {string} Dependiendo al tamaño de la ventana actual, se considera
    *                    un breakpoint actual 
    *                    FULL|DESKTOP|TABLET_LANDSCAPE|TABLET_PORTRAIT|TABLET|MOBILE
    *                    |MOBILE_LANDSCAPE|MOBILE_PORTRAIT
    * @public
    * @default De inicio es una cadena vacía.
    */
  breakpoint = '';
  /**
   * Responsive Recopila información del dispositivo y resolución
   * @class Responsive
   * @constructor
   */
  constructor() {
    let agent = navigator.userAgent;
    //Se define la orientación correcta
    if (this.height < this.width) {
      this.orientation = CONFIG.ORIENTATION.LANDSCAPE;
    }
    // Por default se define el dispositivo como Mobile
    this.mobile = true;
    // Se revisa el navegador para definir correctamente el dispositivo
    if (agent.match(CONFIG.DEVICE.IPHONE)) {
      this.device = CONFIG.DEVICE.IPHONE;
      if (agent.match(CONFIG.DEVICE.IPOD)) {
        this.device = CONFIG.DEVICE.IPOD;
      }
    }
    else if (agent.match(CONFIG.DEVICE.IPAD)) {
      this.device = CONFIG.DEVICE.IPAD;
    }
    else if (agent.match(CONFIG.DEVICE.ANDROID)) {
      this.device = CONFIG.DEVICE.ANDROID;
      if (agent.match(CONFIG.DEVICE.WINDOWS)) {
        this.device = CONFIG.DEVICE.WINDOWS;
      }
    }
    else {
      this.device = CONFIG.DEVICE.DESKTOP;
      this.mobile = false;
    }
  }
  /**
   * Actualiza los valores de las propiedades, cada que se invoca
   * @method Responsive#update
   * @public
   */
  update(): void {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    if (this.height < this.width) {
      this.orientation = CONFIG.ORIENTATION.LANDSCAPE;
    }
    else {
      this.orientation = CONFIG.ORIENTATION.PORTRAIT;
    }

    if (this.width > CONFIG.BREAKPOINTS.DESKTOP.VALUE) {
      this.breakpoint = CONFIG.BREAKPOINTS.FULL.NAME;
    }
    else if (this.width > CONFIG.BREAKPOINTS.TABLET_LANDSCAPE.VALUE && this.width <= CONFIG.BREAKPOINTS.DESKTOP.VALUE) {
      this.breakpoint = CONFIG.BREAKPOINTS.DESKTOP.NAME;
    }
    else if (this.width > CONFIG.BREAKPOINTS.TABLET_PORTRAIT.VALUE && this.width <= CONFIG.BREAKPOINTS.TABLET_LANDSCAPE.VALUE) {
      this.breakpoint = CONFIG.BREAKPOINTS.TABLET_LANDSCAPE.NAME;
    }
    else if (this.width > CONFIG.BREAKPOINTS.TABLET.VALUE && this.width <= CONFIG.BREAKPOINTS.TABLET_PORTRAIT.VALUE) {
      this.breakpoint = CONFIG.BREAKPOINTS.TABLET_PORTRAIT.NAME;
    }
    else if (this.width > CONFIG.BREAKPOINTS.MOBILE.VALUE && this.width <= CONFIG.BREAKPOINTS.TABLET.VALUE) {
      this.breakpoint = CONFIG.BREAKPOINTS.TABLET.NAME;
    }
    else if (this.width > CONFIG.BREAKPOINTS.MOBILE_LANDSCAPE.VALUE && this.width <= CONFIG.BREAKPOINTS.MOBILE.VALUE) {
      this.breakpoint = CONFIG.BREAKPOINTS.MOBILE.NAME;
    }
    else if (this.width > CONFIG.BREAKPOINTS.MOBILE_PORTRAIT.VALUE && this.width <= CONFIG.BREAKPOINTS.MOBILE_LANDSCAPE.VALUE) {
      this.breakpoint = CONFIG.BREAKPOINTS.MOBILE_LANDSCAPE.NAME;
    }
    else if (this.width <= CONFIG.BREAKPOINTS.MOBILE_PORTRAIT.VALUE) {
      this.breakpoint = CONFIG.BREAKPOINTS.MOBILE_PORTRAIT.NAME;
    }
  }
  /**
   * Método que se invoca para actualizar las propiedades
   * con cualquier cambio en la ventana
   * @method Responsive#resize
   * @public
   */
  resize(callback): void {
    let idTime;
    window.addEventListener('resize', () => {
      clearTimeout(idTime);
      idTime = setTimeout(() => {
        this.update();
        if (callback && typeof (callback) === 'function') {
          callback.apply(this);
        }
      }, 300);
    });
  }
}
