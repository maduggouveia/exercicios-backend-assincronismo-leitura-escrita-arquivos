import { NextFunction, Request, Response } from "express";


export async function camposObrigatorios(req: Request, res: Response, next: NextFunction) {

    const { titulo, origem, tipo, descricao } = req.body

    try {
        
        if(!titulo || !origem || !tipo || !descricao) {

            throw new Error("Todos oscampos são obrigatórios")

        }

    } catch (error) {
        const erroJS = error as Error
        return res.status(400).json({"mensagem": erroJS.message})
    }

    
    next()
}