# WHMEmailManager
Pequeña plataforma hecha con PHP & AJAX mayormente, utilizando la UAPI de cPanel para poder brindar un panel de administración de cuentas de correo de forma rápida e intuitiva de todas las cuentas alojada en el mismo servidor (WHM)

Actualmente no cuenta con un sitema de control de usuarios (aka; logueo) ya que está enfocado para uso interno (intranet o plataforma de gestión de clientes con un poco de trabajito extra)

### :pizza: Aclaratoria
A diferencia del cPanelEmailManager, como menciona el nombre, este va enfocado para ser utilizado con tu user/pass de tu servidor (ya seas que tengas un hosting reseller, dedicado o vps), por lo que tendrás acceso a manipular las cuentas de correo de todos tus usuarios en los siguientes puntos disponibles...

### :octocat: Cosas que se pueden realizar
- Crear cuenta de correo
- Eliminar cuenta de correo
- Cambiar contraseña
- Cambiar capacidad de la bandeja
- Activar/Desactivar cuenta de correo



### :octocat: Como configurar...

Agregar los datos de tu servidor en el archivo `WHM_config.php`

	define('WHM_user', '__modify_this__');
	define('WHM_pass', '__modify_this__');
	define('WHM_svIP', '__modify_this__');



### :octocat: Agradecimientos

- @N1ghteyes, creador de la librería en PHP para interactuar con la UAPI.
- @crodas por ayudarme cuando me surgían dudas...


### :octocat: Problemas?

Aún sigo realizando pruebas varias para poder agregar cosas útiles, pero si en algún momento encuentran algún problemita que se me haya pasado por alto, no duden en avisarme en la sección `Issues`
