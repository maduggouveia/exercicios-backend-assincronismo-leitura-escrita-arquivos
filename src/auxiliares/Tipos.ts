export type TLenda = {
    id: number
    titulo: string
    origem: string
    tipo: string
    descricao: string
}

export type TDados = {
    proximoId: number
    lendas: TLenda[]
}