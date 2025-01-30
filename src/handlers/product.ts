import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import Product from '../models/Product.model'


export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    //Validación
    await check('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio.')
        .run(req)

    await check('price')
        .isNumeric().withMessage('Valor no válido.')
        .notEmpty().withMessage('El precio del Producto no puede ir vacio.')
        .custom(value => value > 0).withMessage('Precio no válido.')
        .run(req)

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return
    }

    const product = await Product.create(req.body)
    res.json({ data: product })
}