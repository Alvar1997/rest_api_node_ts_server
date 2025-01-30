import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, getProductById, getProducts } from "./handlers/product"
import { hadleInputErrors } from "./middleware"

const router = Router()

//Routing
router.get('/', getProducts)
router.get('/:id',
    //validación
    param('id')
        .isInt().withMessage('ID no válido.'),
    hadleInputErrors,
    getProductById
)

router.post('/',
    //Validación
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio.'),
    body('price')
        .isNumeric().withMessage('Valor no válido.')
        .notEmpty().withMessage('El precio del Producto no puede ir vacio.')
        .custom(value => value > 0).withMessage('Precio no válido.'),
    hadleInputErrors,
    createProduct
)

router.put('/', (req, res) => {
    res.json('DESDE PUT')
})

router.patch('/', (req, res) => {
    res.json('DESDE PATCH')
})

router.delete('/', (req, res) => {
    res.json('DESDE DELETE')
})

export default router