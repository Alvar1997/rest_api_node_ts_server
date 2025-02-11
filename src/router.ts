import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product"
import { hadleInputErrors } from "./middleware"

const router = Router()
/**
 * @swagger
 * components:
 *  schemas:
 *     Product:
 *      type: object
 *      properties:
 *        id:
 *         type: integer
 *         description: The product ID
 *         example: 1
 *        name:
 *         type: string
 *         description: The product name
 *         example: Monitor Curvo de 49 pulgadas
 *        price:
 *         type: number
 *         description: The product price
 *         example: 300
 *        availability:
 *         type: boolean
 *         description: The product availability
 *         example: true
 */

/**
 * @swagger
 * /api/products:	
 *  get:
 *   summary: Get a list of products
 *   tags:
 *   - Products
 *   description: Return a list of products
 *   responses:
 *      200:
 *          description: Successful response
 *          content:
 *              application/json:
 *                 schema:
 *                   type: array
 *                   items:
 *                    $ref: '#/components/schemas/Product'
 * 
 */
router.get('/', getProducts)

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Get a product by ID
 *      tags:
 *          - Products
 *      description: Return a product based on its unique ID
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *             description: Successful response
 *             content:
 *               application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Product'
 *          404:
 *              description: Not found
 *          400:
 *              description: Bad request - Invalid ID supplied
 * 
 */
router.get('/:id',
    //validación
    param('id')
        .isInt().withMessage('ID no válido.'),
    hadleInputErrors,
    getProductById
)

/**
 * @swagger
 * /api/products:
 *  post:
 *      summary: Create a new product
 *      tags:
 *          - Products
 *      description: Returns a new record in the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Monitor Curvo de 49 pulgadas
 *                          price:
 *                              type: number
 *                              example: 399
 *      responses:
 *          201:
 *              description: Successful response
 *          400:
 *              description: Bad request - Invalid input
 * 
 */
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

router.put('/:id',
    param('id')
        .isInt().withMessage('ID no válido.'),
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio.'),
    body('price')
        .isNumeric().withMessage('Valor no válido.')
        .notEmpty().withMessage('El precio del Producto no puede ir vacio.')
        .custom(value => value > 0).withMessage('Precio no válido.'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no válido.'),
    hadleInputErrors,
    updateProduct
)

router.patch('/:id',
    param('id')
        .isInt().withMessage('ID no válido.'),
    hadleInputErrors,
    updateAvailability
)

router.delete('/:id',
    param('id')
        .isInt().withMessage('ID no válido.'),
    hadleInputErrors,
    deleteProduct
)

export default router