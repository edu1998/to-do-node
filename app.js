const { argv } = require('./config/yargs.config');
const { colors } = require('colors');
const {
    crearTarea,
    getListado,
    actulizarTarea,
    borrarTarea,
    filterByCompletado
} = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let crear = crearTarea(argv.descripcion);
        console.log(crear);
        break;
    case 'listar':
        if (argv.completado) {
            let resp = filterByCompletado(argv.completado)
            for (const iterator of resp) {
                console.log(`Por hacer filtradas por ${argv.completado}`.green);
                console.log(`Tarea: ${iterator.descripcion}`);
                console.log(`Estado: ${iterator.completado}`);
                console.log("==============================".green);
            }
        } else {
            let tareas = getListado();
            for (let iterator of tareas) {
                console.log("===========Por hacer=========".green);
                console.log(`Tarea: ${iterator.descripcion}`);
                console.log(`Estado: ${iterator.completado}`);
                console.log("==============================".green);
            }
        }
        break;
    case 'actualizar':
        let resp = actulizarTarea(argv.descripcion, argv.completado)
        console.log(resp);
        break;
    case 'borrar':
        let borrar = borrarTarea(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no reconocido'.red);
        break;
}