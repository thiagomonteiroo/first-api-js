import { db } from "../db.js"

export const getClients = (_, res) => {
    const query = "SELECT * FROM clients"

    db.query(query, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data.rows)
    })
}

export const addClient = (req, res) => {
    const query = "INSERT INTO clients(name, id_user) VALUES ($1, $2)"

    const values = [
        req.body.name,
        req.body.id_user
    ]

    db.query(query, values, (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Cliente cadastrado com sucesso")
    })
}

export const updateClient = (req, res) => {
    const query = "UPDATE clients SET name=$1, id_user=$2 WHERE id=$3"

    const values = [
        req.body.name,
        req.body.id_user,
        req.params.id
    ]

        verificaCliente()

        db.query(query, values, (err) => {
            if (err) return res.json(err)
    
            return res.status(200).json("Cliente atualizado com sucesso")
        })
}

export const deleteCLient = (req, res) => {
    const query = "DELETE FROM clients WHERE id = $1;"

    const values = [
        req.params.id
    ]


    db.query(query, values, (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Cliente deletado com sucesso")
    })
}

async function verificaCliente(){
    const query = "SELECT p.name FROM privileges_users p INNER JOIN users u ON p.id = u.level INNER JOIN clients c on c.id_user = u.id WHERE c.id_user = $1 LIMIT 1"
    const values = [
        22
    ]

    const teste = await db.query('select * from clientes')
    console.log(teste)
     /*
    db.query(query, values,  (err, data) => {
        retornoDB = data.rows
        retornoDB = retornoDB[0].name

    })
*/
}
