const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea a agregar'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea para la lista', {
        descripcion
    }).command('actualizar', 'Actualizar la ultima tarea', {
        descripcion,
        completado
    }).command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}