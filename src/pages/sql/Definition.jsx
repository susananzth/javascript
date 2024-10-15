import React from 'react'
import Content from '@components/Content'
import Acordeon from '@components/Acordeon'
import AcordeonItem from '@components/AcordeonItem'
import Code from '@components/Code'

function DefinitionSQL() {
  return (
    <Content 
        mainTitle="SQL"
        articleTitle="Definiciones"
        keywords="SQL, Base de datos, MySQL, Programación básica, Principios de programación"
        date="15/10/2024">
        <Acordeon>
            <AcordeonItem title="¿Qué es SQL?">
                <p>
                  Lenguaje estructurado de consultas (Structure Query Language) 
                  creado por IBM. Es un lenguaje para interactuar con Bases de datos estructurales.
                </p>
                <p>
                  No es considerado un lenguaje de programación porque carece de la estructura 
                  de los lenguajes de programación, es un lenguaje de acceso a datos o consulta.
                </p>
            </AcordeonItem>
            <AcordeonItem title="¿Cómo se comunica?">
                <p>
                  Se realiza una solicitud (sentencia) SQL al server, éste se comunica con la base de datos y devuelve la consulta.
                </p>
                <p>
                  Para gestionar la base de datps, se utiliza un gestor de base de datos, estas adoptan el estandar SQL 
                  para la comunicación aunque cada gestor tiene su 'dialecto' y todos utilizan los estandar ANSI e ISO.
                </p>
            </AcordeonItem>
            <AcordeonItem title="Comandos o grupos">
                <p>
                Hay 4 tipos de comandos: 
                </p>
                <ol className="list-disc *:ms-5 *:pt-2">
                  <li>
                    <strong>DDL</strong>:
                    (<b>D</b>ata <b>D</b>efinition <b>L</b>anguage) se utilizan para crear y modificar la 
                    estructura de la base de datos como crear, modificar y eliminar tablas.
                    <ol className="list-square *:ms-5 *:pt-2">
                      <li>
                        <code className="font-mono text-indigo-700">CREATE</code>: 
                        Se utiliza para crear nuevas tablas o bases de datos.
<Code language="sql">{`CREATE TABLE nueva_tabla (columna1 tipo_dato, columna2 tipo_dato);`}</Code>
                      </li>
                      <li>
                        <code className="font-mono text-indigo-700">ALTER</code>: 
                        Modifica la estructura de una tabla existente, como agregar o eliminar columnas.
<Code language="sql">{`ALTER TABLE tabla ADD columna_nueva tipo_dato;`}</Code>
                      </li>
                      <li>
                        <code className="font-mono text-indigo-700">DROP</code>: 
                        Elimina tablas o bases de datos existentes.
<Code language="sql">{`DROP TABLE tabla;`}</Code>
                      </li>
                      <li>
                        <code className="font-mono text-indigo-700">TRUNCATE</code>: 
                        Se utiliza para eliminar todas las filas de una tabla de manera rápida y 
                        eficiente, sin registrar la eliminación de cada fila individualmente. 
                        A diferencia de DELETE, no se puede usar con una cláusula WHERE y no puede 
                        ser revertido (a menos que la transacción esté activa).
<Code language="sql">{`TRUNCATE TABLE nombre_tabla;`}</Code>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <strong>DML</strong>:
                    (<b>D</b>ata <b>M</b>anipulation <b>L</b>anguage) se utiliza para ver, 
                    modificar, agregar y eliminar registros. Para hacer consultas de selección y acción.
                    <ol className="list-square *:ms-5 *:pt-2">
                      <li>
                        <code className="font-mono text-indigo-700">SELECT</code>: 
                        Se utiliza para especificar las columnas que deseas recuperar de una base de datos.
<Code language="sql">{`SELECT columna1, columna2 FROM tabla;`}</Code>
                      </li>
                      <li>
                        <code className="font-mono text-indigo-700">DISTINCT</code>: 
                        Elimina duplicados de los resultados de la consulta 
                        <code className="font-mono text-indigo-700 ms-1">SELECT</code>.
<Code language="sql">{`SELECT DISTINCT columna1, columna2 FROM nombre_tabla;

SELECT DISTINCT paises FROM clientes;`}</Code>
                      </li>
                      <li>
                        <code className="font-mono text-indigo-700 ms-1">INSERT</code>: 
                        Se utiliza para agregar nuevas filas a una tabla.
<Code language="sql">{`INSERT INTO tabla (columna1, columna2) VALUES (valor1, valor2);`}</Code>
                      </li>
                      <li>
                        <code className="font-mono text-indigo-700 ms-1">UPDATE</code>: 
                        Modifica los datos existentes en una tabla.
<Code language="sql">{`UPDATE tabla SET columna1 = valor1 WHERE condicion;`}</Code>
                      </li>
                      <li>
                        <code className="font-mono text-indigo-700 ms-1">DELETE</code>: 
                        Elimina filas de una tabla.
<Code language="sql">{`DELETE FROM tabla WHERE condicion;`}</Code>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <strong>DCL</strong>:
                    (<b>D</b>ata <b>C</b>ontrol <b>L</b>anguage) se utiliza para controlar 
                    la seguridad de la información.
                    <ol className="list-square *:ms-5 *:pt-2">
                      <li>
                        <code className="font-mono text-indigo-700">GRAND</code>: 
                        Se utiliza para otorgar permisos a usuarios o roles sobre objetos de la base 
                        de datos, como tablas o vistas. Permite especificar qué operaciones pueden realizar.
<Code language="sql">{`GRANT SELECT, INSERT ON nombre_tabla TO usuario;`}</Code>
                      </li>
                      <li>
                        <code className="font-mono text-indigo-700">REVOKE</code>: 
                        Se utiliza para retirar permisos previamente otorgados a usuarios 
                        o roles. Funciona de manera inversa a GRANT.
<Code language="sql">{`REVOKE SELECT, INSERT ON nombre_tabla FROM usuario;`}</Code>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <strong>TCL</strong>:
                    (<b>T</b>ransaction <b>C</b>ontrol <b>L</b>anguage) se utiliza para la 
                    gestión de cambios en los datos.
                    <ol className="list-square *:ms-5 *:pt-2">
                      <li>
                        <code className="font-mono text-indigo-700">COMMIT</code>: 
                        Se utiliza para guardar permanentemente todos los cambios realizados en 
                        la base de datos durante una transacción. Una vez que se ejecuta COMMIT, 
                        los cambios son visibles para otros usuarios y no se pueden deshacer.
<Code language="sql">{`COMMIT;`}</Code>
                      </li>
                      <li>
                        <code className="font-mono text-indigo-700">ROLLBACK</code>: 
                        Se utiliza para deshacer todos los cambios realizados en la base de datos 
                        desde el último COMMIT o desde el inicio de la transacción. Esto es útil 
                        en caso de errores o si se desea revertir cambios.
<Code language="sql">{`ROLLBACK;`}</Code>
                      </li>
                      <li>
                        <code className="font-mono text-indigo-700">SAVEPOINT</code>: 
                        Se utiliza para establecer un punto de guardado dentro de una transacción. 
                        Permite realizar un ROLLBACK a ese punto específico, en lugar de deshacer 
                        todos los cambios realizados desde el último COMMIT.
<Code language="sql">{`SAVEPOINT nombre_savepoint;`}</Code>
                      </li>
                    </ol>
                  </li>
                </ol>
            </AcordeonItem>
            <AcordeonItem title="Cláusulas">
              <ol className="list-square *:ms-5 *:pt-2">
                <li>
                  <code className="font-mono text-indigo-700">FROM</code>: 
                  Indica la tabla de la cual se van a seleccionar los datos.
<Code language="sql">{`SELECT * FROM tabla;`}</Code>
                </li>
                <li>
                  <code className="font-mono text-indigo-700">WHERE</code>: 
                  Filtra los registros que cumplen con una condición específica.
<Code language="sql">{`SELECT * FROM tabla WHERE condicion;
SELECT nombrearticulo, seccion, precio FROM productos WHERE seccion="CERÁMICA";`}</Code>
                </li>
                <li>
                  <code className="font-mono text-indigo-700">GROUP BY</code>: 
                  Agrupa los registros que tienen valores idénticos en columnas especificadas 
                  y se utiliza con funciones de agregación (como `COUNT`, `SUM`, etc.).
<Code language="sql">{`SELECT columna1, COUNT(*) FROM tabla GROUP BY columna1;`}</Code>
                </li>
                <li>
                  <code className="font-mono text-indigo-700">HAVING</code>: 
                  Filtra los resultados después de aplicar `GROUP BY`, permitiendo condiciones en grupos.
<Code language="sql">{`SELECT columna1, COUNT(*) FROM tabla GROUP BY columna1 HAVING COUNT(*) > 1;`}</Code>
                </li>
                <li>
                  <code className="font-mono text-indigo-700">ORDER BY</code>: 
                  Ordena los resultados de la consulta según una o más columnas, en orden ascendente o descendente.
<Code language="sql">{`SELECT * FROM tabla ORDER BY columna1 ASC;
SELECT paises FROM clientes; ORDER BY paises DESC`}</Code>
                </li>
              </ol>
            </AcordeonItem>
            <AcordeonItem title="Operadores">
              <ol className="list-square *:ms-5 *:pt-2">
                <li>
                  <code className="font-mono text-indigo-700">AND</code>: 
                  Se utiliza para combinar múltiples condiciones en una consulta WHERE.
                  Todos los criterios especificados deben ser verdaderos para que una fila sea incluida en los resultados.
<Code language="sql">{`SELECT * FROM tabla WHERE condicion1 AND condicion2;
SELECT * FROM productos WHERE seccion='DEPORTES' AND paisdeorigen='USA';
-- En este ejempo no muestra ningún resultado:
SELECT nombrearticulo, seccion, precio FROM productos WHERE seccion='CERÁMICA' AND seccion='DEPORTES';`}</Code>
                </li>
                <li>
                  <code className="font-mono text-indigo-700">OR</code>: 
                  Se utiliza para combinar múltiples condiciones en una consulta WHERE. 
                  Si al menos uno de los criterios especificados es verdadero, la fila será incluida en los resultados.
<Code language="sql">{`SELECT * FROM tabla WHERE condicion1 OR condicion2;
SELECT nombrearticulo, seccion, precio FROM productos WHERE seccion='CERÁMICA' OR seccion='DEPORTES';`}</Code>
                </li>
                <li>
                  <code className="font-mono text-indigo-700">BETWEEN</code>: 
                  Filtra los resultados dentro de un rango específico de valores.
<Code language="sql">{`SELECT * FROM tabla WHERE columna BETWEEN valor1 AND valor2;
SELECT * FROM productos WHERE fecha BETWEEN '2000-03-01' AND '2000-04-30';`}</Code>
                </li>
                <li>
                  <code className="font-mono text-indigo-700">Mayor y Menor que</code>: 
                  Filtra los resultados dentro de un rango específico de valores.
<Code language="sql">{`
SELECT * FROM productos WHERE precio < 30;
SELECT * FROM productos WHERE precio >= 300;
SELECT * FROM productos WHERE fecha >= '2000-03-01' AND fecha <= '2000-04-30';`}</Code>
                </li>
              </ol>
            </AcordeonItem>
        </Acordeon>
    </Content>
  )
}

export default DefinitionSQL