//Classe que representa a unidade de armazenamento da lista encadeada
class Node{
    constructor(val){
        this.data = val //Informação relevante para usúario
        this.next = null //Ponteiro para o próximo nodo da sequência
    }
}
//Classe que represente a estrutura de dados Lista Encadeada
export default class LinkedList{
    #head //Inicio da lista (cabeça)
    #tail //Fim da lista (cauda)
    #count //Quantidade de nodos da lista

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    //Getter que retorna se a lista encadeada esta vazia ou não
    get isEmpty(){
        return this.#count === 0
    }

    //Getter que retorna a quantidade de elementos da lista
    get count(){
        return this.#count
    }

    //Método para inserir em qualquer posição
    insert(pos, val){
        //Cria o node para armazenar o valor pretendido
        const inserted = new Node(val)
        //1º caso: é olhar se a lista está vazia
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }
        //2º caso: lista não vazia, insersão na primeira posição
        else if(pos === 0){
            inserted.next = this.#head
            this.#head = inserted
        }

        //3º caso: inserção no final da lista
        else if(pos >= this.#count){
            this.#tail.next = inserted
            this.#tail = inserted
        }
        this.#count++

    }

}

const lista = new LinkedList()


console.log(lista.insert(50, 10))
console.log(lista.isEmpty)
console.log(lista.count)
