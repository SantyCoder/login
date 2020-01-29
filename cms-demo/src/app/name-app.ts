export const CONFIG = {
  /**
   * Objecto con las constantes de tiempos que existen en las animaciones
   * del sitio.
   * @constant
   * @type {object}
   */
  BREAKPOINTS: {
    /**
     * Configuración para pantallas grandes
     * @constant
     * @type {object}
     */
    FULL: {
      /**
       * Nombre de la resolución que cubre toda la pantalla
       * @constant
       * @type {string}
       */
      NAME: "full",
      /**
       * Número máximo de pixeles
       * @constant
       * @type {undefined}
       */
      VALUE: "100%"
    },
    /**
     * Configuración para las pantallas estándares
     * @constant
     * @type {object}
     */
    DESKTOP: {
      /**
       * Nombre de la resolución para las pantallas estándares
       * @constant
       * @type {string}
       */
      NAME: "desktop",
      /**
       * Número máximo de pixeles para la vista en computadoras
       * @constant
       * @type {number}
       */
      VALUE: 1200
    },
    /**
     * Configuración para las tabletas en posición landscape
     * @constant
     * @type {object}
     */
    TABLET_LANDSCAPE: {
      /**
       * Nombre de la resolución que cubre las tabletas en posición landscape
       * @constant
       * @type {string}
       */
      NAME: "tablet-landscape",
      /**
       * Número máximo de pixeles para vistas por ejemplo en ipad 1 y 2
       * @constant
       * @type {number}
       */
      VALUE: 1024
    },
    /**
     * Configuración para las tabletas en posición portrait
     * @constant
     * @type {object}
     */
    TABLET_PORTRAIT: {
      /**
       * Nombre de la resolución que cubre las tabletas en posición portrait
       * @constant
       * @type {string}
       */
      NAME: "tablet-portrait",
      /**
       * Número máximo de pixeles para vistas por ejemplo en ipad mini
       * @constant
       * @type {number}
       */
      VALUE: 960
    },
    /**
     * Configuración genérica para tabletas y phablets
     * @constant
     * @type {object}
     */
    TABLET: {
      /**
       * Nombre de la resolución que cubre las tabletas y phablets
       * @constant
       * @type {string}
       */
      NAME: "tablet",
      /**
       * Número máximo de pixeles para vistas por ejemplo en iPhone 6+
       * @constant
       * @type {number}
       */
      VALUE: 768
    },
    PHABLET: {
      NAME: "phablet",
      VALUE: 740
    },
    /**
     * Configuración genérica para teléfonos
     * @constant
     * @type {object}
     */
    MOBILE: {
      /**
       * Nombre de la resolución que cubre los teléfonos en forma general
       * @constant
       * @type {string}
       */
      NAME: "mobile",
      /**
       * Número máximo de pixeles para vistas por ejemplo en Xperia Z5
       * @constant
       * @type {number}
       */
      VALUE: 560
    },
    /**
     * Configuración para teléfonos en modo landscape
     * @constant
     * @type {object}
     */
    MOBILE_LANDSCAPE: {
      /**
       * Nombre de la resolución que cubre los teléfonos en modo landscape
       * @constant
       * @type {string}
       */
      NAME: "mobile-landscape",
      /**
       * Número máximo de pixeles para vistas por ejemplo en iPhone 5s
       * @constant
       * @type {number}
       */
      VALUE: 480
    },
    /**
     * Configuración para teléfonos en modo portrait
     * @constant
     * @type {object}
     */
    MOBILE_PORTRAIT: {
      /**
       * Configuración para teléfonos en modo portrait
       * @constant
       * @type {object}
       */
      NAME: "mobile-portrait",
      /**
       * Número máximo de pixeles para vistas en el resto de dispositivos
       * móviles
       * @constant
       * @type {number}
       */
      VALUE: 320
    }
  },
  /**
   * Configuración de los nombres de los dispositivos soportados
   * @constant
   * @type {object}
   */
  DEVICE: {
    /**
     * Identificacdor para los teléfonos con Android
     * @constant
     * @type {string}
     */
    ANDROID: "Android",
    /**
     * Identificacdor para las computadoras
     * @constant
     * @type {string}
     */
    DESKTOP: "Desktop",
    /**
     * Identificacdor para las tabletas iPad
     * @constant
     * @type {string}
     */
    IPAD: "iPad",
    /**
     * Identificacdor para los teléfonos con iOS
     * @constant
     * @type {string}
     */
    IPHONE: "iPhone",
    /**
     * Identificacdor para los dispositivos con iOS
     * @constant
     * @type {string}
     */
    IPOD: "iPod touch",
    /**
     * Identificacdor para los teléfonos con Windows Phone
     * @constant
     * @type {string}
     */
    WINDOWS: "Windows Phone"
  },
  ORIENTATION: {
    /**
     * Identificacdor para la posición de paisaje
     * @constant
     * @type {string}
     */
    LANDSCAPE: "landscape",
    /**
     * Identificacdor para la posición por default
     * @constant
     * @type {string}
     */
    PORTRAIT: "portrait"
  }
};