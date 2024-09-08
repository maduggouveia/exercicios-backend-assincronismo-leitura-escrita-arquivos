import { Request, Response } from "express";
import fs from "fs/promises"
import { TDados, TLenda } from "./Tipos";
import { Lenda } from "../modelos/Lenda";

export async function listaLendas(req: Request, res: Response) {

    const bancoDeDados = await fs.readFile("bancodedados.json")
    const listaCompleta: TDados = JSON.parse(bancoDeDados.toString())

return res.json(listaCompleta.lendas)

}

export async function novaLenda(req: Request, res: Response) {

    const { titulo, origem, tipo, descricao } = req.body

    const bancoDeDados = await fs.readFile("bancoDeDados.json")
    const todosDados: TDados = JSON.parse(bancoDeDados.toString())

    const cadastrarLenda:TLenda = new Lenda(todosDados.proximoId, titulo, origem, tipo, descricao)

    todosDados.lendas.push(cadastrarLenda)

    const novaLista: TDados = {
        proximoId: todosDados.proximoId + 1,
        lendas: todosDados.lendas
    }

    await fs.writeFile("bancoDeDados.json", JSON.stringify(novaLista, null, "\t"))

    return res.status(201).json(cadastrarLenda)

}