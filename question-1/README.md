# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

_Escribir aquí el razonamiento al puzzle_

pues siguiendo la secuencia de fibonacci a traves de una ecuacion recursiva, teniendo en cuenta la siguiente: (fn= fn1+fn2), esto quiere decir que la funcion va a sumar el numero actual con el numero anterior partiendo de la logica de que 1 escalon tiene 1 posibilidad y 2 escalones tiene 2 posibilidades. entonces si n < 3 retornamos n, caso contrario partiremos de 2 hasta llegar a n.