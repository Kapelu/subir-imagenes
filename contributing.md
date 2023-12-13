<h1 align="center" style='margin: 0; font-size: 2rem; text-align: center; color: #7776d6;'>Contribuciones a e-comerce</h1>
<br />
<p align="right" style='margin: 0; font-size: 1rem; text-align: right; color: #7776d6;'>por Paul Yauli</p>
<br />

1. Se realiza un Fork del proyecto.
2. Se clona este con el siguiente comando:
    ```bash 
    git clone url_proyecto
    ```

3. Se accede a la carpeta con el comando.
    ```bash
    cd e-comerce
    ```
4. Se instala dependencias de este con el comando:

    ```bash
    npm i -y
    ```





5. Para poder crear una rama, se puede realizar de 2 maneras:
	* Con el comando 
        ```bash
        git branch nombre_rama
        ```
        Esta rama nacera desde la rama donde estes ubicado.

	* A través de GitHub, se ingresa a `branches` y se crea una nueva rama.
6. En caso de haber creado la rama a través de GitHub y quieras utilizarla de manera local, primero debes utilizar el comando "git fetch origin nombre_rama" para así tener esa rama de manera local. Este solo se utiliza una vez para bajarte la rama en especifico que querias utilizar y la creaste desde gitHub, ya que si lo creaste con el comando de manera local no es necesario.
7. Una vez que ya tengas la rama en tu local, podras cambiar de rama a traves del comando "git checkout nombre_rama"
8. En caso tengas que actualizar una rama con los cambios de otros compañeros, utilizar el comando "git pull origin nombre_rama", esto bajara todos los cambios que realizo tu compañero.
9. Cuando realizas un cambio y deseas subirlo, primero debes agregarlo al Stating, esta es una etapa intermedia donde se procede con el comando "git add nombre_archivo" y para subir todos tus cambios de una utiliza el comando "git add ." 
10. Puedes utilzar el comando "git status" para obtener el estado actual de tu proyecto
11. Despues puedes continuar con el comando "git commit -m descripcion_cambio"
12. Y por ultimo para confirmar la subida, utiliza el comando "git push origin nombre_rama"
13. Despues realiza el PULL REQUEST a traves de github. 

