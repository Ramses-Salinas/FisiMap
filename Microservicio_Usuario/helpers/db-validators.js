const Usuario = require('../models/user');

const emailExiste = async( email = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ email })// es {correo: correo}, pero en javascript esto es redundante
    if ( existeEmail ) { // si es true o existe, entonces no podemos registrarlo.
        throw new Error(`El correo: ${ email }, ya está registrado`); // el mensaje aparece en formato json
    }
}

const existeclientePorId = async( id ) => {

    // Verificar si el correo existe
    const existeCliente = await Usuario.findById(id);
    
    if ( !existeCliente ) {
        throw new Error(`El id ${ id } no existe`);
    }
}

module.exports = {
    emailExiste,
    existeclientePorId
}