export class Transacao {
    id?:number|null;
    data?:string|null;
    categoria?:string|null;
    preco?:number|null;

    constructor(id?:number|null, data?:string|null, preco?:number|null, categoria?:string|null){
        this.id = id;
        this.data = data;
        this.preco = preco;
        this.categoria = categoria;
    }
}