import { NextFunction, Request, Response } from 'express'
import Product from '../models/Product.model'

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.findAll({
            order: [
                ['price', 'DESC']
            ]
        })
        res.json({ data: products })
    } catch (error) {
        console.error(error)
    }
}

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const product = await Product.create(req.body)
        res.json({ data: product })
    } catch (error) {
        console.error(error)
    }
}