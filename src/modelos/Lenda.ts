export class Lenda {

    id: number
    titulo: string
    origem: string
    tipo: string
    descricao: string

    constructor(id: number, titulo: string, origem: string,
        tipo: string, descricao: string) {

        this.id = id
        this.titulo = titulo
        this.origem = origem
        this.tipo = tipo
        this.descricao = descricao
    }

}