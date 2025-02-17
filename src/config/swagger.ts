import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: "API Docs for Products"
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUIOptions: SwaggerOptions = {
    customCss: `
      .topbar-wrapper .link{
         content: url('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
         height: 80px;
         width: auto;
      }
      .swagger-ui .topbar {
            background-color: #2b3b45;

    }
    `,
    customSiteTitle: "Documentación REST API Express / TypeScript"
}
export default swaggerSpec
export { swaggerUIOptions }