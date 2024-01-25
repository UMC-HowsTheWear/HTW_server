import SwaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        info: {
            title: 'HTW API',
            version: '1.0.0',
            description: 'HTW API with express, API 설명'
        },
        host: 'localhost:3000',
        basepath: './'
    },

    // security_definition: {
    //     jwt: {
    //         type: 'apikey',
    //         name: 'Authorization',
    //         in: 'header'
    //     }
    // },
    // security: [
    //     { jwt: [] }
    // ],

    apis: ['./src/routes/*.js', './swagger/*']
};

export const specs = SwaggerJsdoc(options);