import { NextFunction, Request, Response } from 'express'
import Product from '../models/Product.model'

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const product = await Product.create(req.body)
        res.json({ data: product })
    } catch (error) { 
        console.error(error)
    }
}