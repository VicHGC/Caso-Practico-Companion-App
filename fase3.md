# Fase 3: Estrategia Offline-First (Store and Forward)

En el campo, la conexión a internet es altamente impredecible. A menudo los operadores
pierden cobertura de datos mientras están grabando.
Pregunta para el candidato: Si el operador presiona "Terminar Sesión" y su celular no
tiene internet en ese momento, la petición al servidor fallará y los datos se perderán. ¿Cómo
modificarías tu código o qué estrategia implementarías para asegurar un comportamiento
offline-first? Explícanos tu lógica en un par de párrafos o pseudocódigo.

# Respuesta del candidato:

Para garantizar que los operadores no pierdan sus registros de campo al quedarse sin internet o cobertura de datos a mi se me ocurriria implementar una persistencia temporal de datos usando la memoria del dispositivo del operador cuando la peticion de red falle, y encolar dicha peticion para cuando el sistema recupere el acceso a internet.

## Logica a implementar:

1. Al presionar el boton de envio, la aplicacion intenta realizar el metodo 'POST'. Si la API falla y arroja un error de red o se detecta una falta de conexion, se captura la excepcion.
2. En lugar de perder el payload con el JSON, este se guarda en el almacenamiento local del dispositivo usando librerias como `AsyncStorage`. El payload se guarda con una clave de almacenamiento.
3. Utilizando un listener de estado de red como `@react-native-community/netinfo` la aplicacion se mantendria a la escucha para que cuando el dispositivo recupere la conexion a internet un proceso en segundo plano lea la cola con la clave de almacenamiento y envie los datos al servidor. Si se recibe un status 200(ok), se limpia el almacenamiento local. 
