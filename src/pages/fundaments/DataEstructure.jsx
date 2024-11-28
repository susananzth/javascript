import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function DataEstructure() {
  return (
    <>
      <Content
        mainTitle="Fundamentos"
        articleTitle="Estructuras de datos en programación"
        keywords="Fundamentos de programación, Estructura de datos, Programación básica, Principios de programación"
        date="28/11/2024"
      >
        <Acordeon>
          <AcordeonItem title="Definición" style="rounded-b-xl">
            <p>
                Las estructuras de datos son una forma de organizar y almacenar datos e 
                información en un programa de computadora para que se puedan usar de 
                manera eficiente, la forma en que se organiza este conjunto de datos o 
                información se le llama estructura de datos y en función de cual utilizamos 
                o que propósito los algoritmos irán más lento o más rapido. 
            </p>
            <p>
                Para poder medir que tan buena es la estructura de datos en función de nuestro 
                requerimiento, se utiliza una herramienta denominada notación asintótica, 
                esta nos dice a que ritmo aumenta el tiempo y espacio a medida que aumenta 
                el algoritmo o cantidad de información almacenada.
            </p>
          </AcordeonItem>
          <AcordeonItem title="Tipos" style="rounded-b-xl">
            <p>
                Algunas de las estructuras de datos más comunes incluyen arreglos, listas 
                enlazadas, pilas, colas, árboles y grafos. Cada una de estas estructuras 
                tiene sus propias fortalezas y debilidades, y se utilizan en diferentes situaciones 
                según las necesidades del programa.
            </p>
            <ol className="list-disc *:ms-5 *:pt-2">
                <li>
                    Los <strong>arreglos</strong> son la forma más simple de estructura de datos y simplemente 
                    involucran la agrupación de elementos del mismo tipo. Añade por cada elemento 
                    un espacio de memoria en la ram, para acceder a cada elemento se hace 
                    a través del índice.
                </li>
                <li>
                    Las <strong>listas</strong> enlazadas son una estructura de datos que contiene una secuencia 
                    de nodos, cada uno de los cuales contiene un valor y un enlace al siguiente 
                    nodo en la lista. Se tarda más para acceder a cada elemento que el arreglo, 
                    la ventaja es que no es lineal como el arreglo, por lo que acceder al ultimo 
                    elemento no será necesario recorrer toda la estructura.
                </li>
                <li>
                    Una <strong>tabla de hash</strong> es una estructura de datos que implementa una matriz 
                    asociativa, un tipo de estructura de datos que puede mapear claves a valores. 
                    Una tabla de hash utiliza una función hash para calcular un índice en una 
                    matriz de compartimentos o cubos, desde el cual se puede encontrar el valor 
                    deseado. Para acceder al dato de utiliza la función 
                    de hash <code className="font-mono text-indigo-700">`hash(key)`</code>, 
                    con esto se gana mucho tiempo al encontrar el dato.
                </li>
                <li>
                    Las <strong>pilas</strong> son una estructura de datos que sigue el principio 
                    <strong>LIFO</strong> <i>(Last In, First Out - El último en entrar es el primero en salir)</i>. 
                    Es decir, el último elemento que se agrega a la pila es el primero en ser 
                    eliminado. Se utiliza en grafos para algoritmos de búsqueda en profundidad.
                </li>
                <li>
                    Las <strong>colas</strong> son una estructura de datos que sigue el principio 
                    <strong>FIFO</strong> <i>(First In, First Out - El primero en entrar es el primero en salir)</i>. 
                    Es decir, el primer elemento que se agrega a la cola es el primero en ser 
                    eliminado. Se utiliza en grafos para algoritmos de búsqueda en anchura.
                </li>
                <li>
                    Una <strong>cola de prioridad</strong> es una estructura de datos que gestiona 
                    un conjunto de elementos, cada uno con una cierta prioridad. Los elementos con 
                    mayor prioridad se desencolan antes que los elementos con menor prioridad. Si 
                    dos elementos tienen la misma prioridad, se desencolan según su orden en la cola.
                </li>
                <li>
                    Los <strong>grafos</strong> son una estructura de datos que consiste en nodos 
                    que están conectados por aristas. Los grafos son útiles para representar 
                    redes y relaciones complejas entre diferentes elementos.
                    Tipos de grafos:
                    <ol className="list-square *:ms-5 *:pt-2">
                        <li>
                            Los <strong>árboles</strong> son una estructura de datos que tiene 
                            una raíz y varios nodos que están conectados por enlaces. Esta estructura 
                            de datos es útil para representar jerarquías y relaciones parentales. 
                            Todos los árboles son grafos, pero no todos los grafos son árboles. 
                            Para todo par de nodo solo existe un camino.
                        </li>
                    </ol>
                </li>
                <li>
                    Un <strong>montículo</strong> es una estructura de datos especializada que se 
                    basa en el principio de orden de montículo. Este principio establece que la clave 
                    de cada nodo es siempre mayor o menor que las claves de sus nodos hijos, 
                    dependiendo de si es un montículo máximo o mínimo.
                </li>
                <li>
                    La <strong>unión-find o conjunto disjunto</strong> es una estructura de datos 
                    que rastrea un conjunto de elementos particionado en subconjuntos disjuntos. 
                    Proporciona operaciones eficientes para agregar nuevos conjuntos, unir conjuntos 
                    existentes y determinar si dos elementos están en el mismo conjunto.
                </li>
            </ol>
          </AcordeonItem>
        </Acordeon>
      </Content>
    </>
  );
}

export default DataEstructure;
