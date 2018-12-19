const argv = require('yargs')
    .command('crear', 'Creacion de una nueva tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'contine la descripcion de la tarea'
        }
    }).command('actualizar', 'Actualizar una tarea ya existente', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'es la descripcion de la tarea a actualizar'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'define si la tarea esta completada o no'
        }
    }).command('borrar', "borrar una tarea por hacer", {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'es la descripcion de la tarea a borrar'
        }
    }).command('listar', 'listar por tareas pendientes o terminadas', {
        completado: {
            alias: 'c',
            desc: 'valor por el cual se quiere filtar',
        }
    })
    .help()
    .argv

module.exports = {
    argv
}