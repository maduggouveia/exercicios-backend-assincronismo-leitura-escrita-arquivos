import { Request, Response, Router } from "express"
import { listaLendas, novaLenda } from "./auxiliares/controladores"
import { camposObrigatorios } from "./auxiliares/intermediarios"

const rotas = Router()

rotas.get('/', (req: Request, res: Response) => {
    return res.json("Lendas Urbanas API")
})

rotas.get("/lendas", listaLendas)

rotas.post("/lendas", camposObrigatorios, novaLenda)


export default rotas