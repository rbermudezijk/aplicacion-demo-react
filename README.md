# Guía sobre React Native

El código de este ejemplo corresponde a una guía de desarrollo de aplicaciones
móviles híbridas desarrollada por [raywenderlich](raywenderlich.com), La guía de
desarrollo se llama [React Native Tutorial: Building Android Apps with Javascript](https://www.raywenderlich.com/247-react-native-tutorial-building-android-apps-with-javascript).

Además de ello, y en caso de ser primeriso en el desarrollo de aplicaciones para
Android, se recomienda revisar el tutorial de instalación de android llamado
[Beginning Android Development with Kotlin, Part One: Installing Android Studio](https://www.raywenderlich.com/478209-beginning-android-development-with-kotlin-part-one-installing-android-studio),
en donde se explica la configuración del entorno de desarrollo para compilar y
ejecutar aplicaciones móviles sobre dispositivos Android.

## Otras guías útiles

Además del tutorial seguido se para el desarrollo de esta aplicación, a continuación
se presentan otros enlaces útiles:

 - [Cómo ejecutar el emulador de Android en Windows](http://ingmmurillo.blogspot.com/2012/07/como-ejecutar-el-emulador-de-android-en.html)
 - [React Native Action Button](https://github.com/mastermoo/react-native-action-button)
 - [Displaying Google Maps in your app](https://www.youtube.com/watch?v=RjW1hMOA9M0)

## Documentación oficial

 - [Cómo implemetar tu app sobre un emulador](https://developer.android.com/studio/build/building-cmdline#RunningOnEmulator)
 - [Doumentación oficial de React Native](https://facebook.github.io/react-native/docs/getting-started)

## Software adicional

Durante el desarrollo fue necesario para el equipo de computo donde se ejecuto el tutorial de [raywenderlich](raywenderlich.com)
insalar el siguiente software:

 - [Intel® Hardware Accelerated Execution Manager (Intel® HAXM)](https://software.intel.com/en-us/articles/intel-hardware-accelerated-execution-manager-intel-haxm)
 - [Download Intel® HAXM](https://github.com/intel/haxm/releases/download/v7.3.2/haxm-windows_v7_3_2.zip)

Además, también hay que se requirió habilitar la caracteristica [VT-x de Intel](https://www.muycomputer.com/2015/04/14/intel-vt-x-virtualizacion/) para ejecutar el emulador de Android.

## Recomendaciones

Se recomienda agregar al **PATH** del sistema las direcciones del sdk de Android
para poder ejecutar desde la interfaz de lineas de instrucciones algunas herramientas
del SDK de Android:

 - ~\Android\Sdk\tools
 - ~\Android\Sdk\platform-tools

# Herramientas útiles de la interfaz de linea de instrucciones

```bash
    #Lista los dispisitivos android conectados al sistema
    abd devices

    #Lista los dispositivos android virtuales disponibles
    android list avd 

    # Crean un nuevo dispositivo virtual
    android create avd -n avd-name --

    # Ejecuta un dispositivo virtual
    emulator -avd avd-name

    # CLI de React Native
    npm install -g react-native-cli
    
    # Iniciar proyecto de react native
    react-native init NombreAplicacion
```