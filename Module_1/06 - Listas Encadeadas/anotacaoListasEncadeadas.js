class No{
    constructor(nome){
        this.nomeNo = nome;
        this.proximoNo = null;
    }
}

class ListaLigada{
    constructor(){
        this.cabeca = null;
    }
    addFirst(nome){
        const newNo = new No(nome);
        newNo.proximoNo = this.cabeca;
        this.cabeca = newNo;
    }
    addLast(nome){
        const newNo = new No(nome);
        if(!this.cabeca){
            this.cabeca = newNo;
        }else{
            let current = this.cabeca;
            while (current.proximoNo){
                current = current.proximoNo;
            }
            current.proximoNo = newNo;
        }
    }
    removeFirst(){
        if(!this.cabeca){
            return null;
        }
        const removedNo = this.cabeca;
        this.cabeca = this.cabeca.proximoNo;
        removedNo.proximoNo = null;
        return removedNo.nomeNo;
    }
    removeLast(){
        if(!this.cabeca){
            return null;
        }
        if(!this.cabeca.proximoNo){
            const removedNo = this.cabeca;
            this.cabeca = null;
            return removedNo.nomeNo;
        }
        let current = this.cabeca;
        let previous = null;
        while(current.proximoNo){
            previous = current;
            current = current.proximoNo;
        }
    }
    search(nome){
        let current = this.cabeca;
        while(current){
            if(current.nomeNo === nome){
                return current;
            }
            current = current.proximoNo;
        }
        return null;
    }
    size(){
        let count = 0;
        let current = this.cabeca;
        while(current){
            count++;
            current = current.proximoNo;
        }
        return count;
    }
    printList(){}
}