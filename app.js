// const argv = require('yargs').argv;
const { argv } = require('./config/yargs');
const pH = require('./por-hacer/por-hacer');
const color = require('colors');

let comando = argv._[0];
// comando = comando.toLowerCase();
switch (comando) {
    case 'crear':
        let tarea = pH.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = pH.getListado();

        for (const tarea of listado) {
            console.log('--------Tarea---------'.magenta);
            console.log(color.cyan(tarea.descripcion));
            console.log('Estado: ', tarea.completada);
            console.log('----------------------'.magenta);
        }

        break;

    case 'actualizar':

        let update = pH.actualizar(argv.descripcion, argv.completada);

        console.log(update);

        break;
    case 'borrar':

        let borrado = pH.borrar(argv.descripcion);

        console.log(borrado);

        break;

    default:
        console.log('Comando no identificado'.red);
        break;
}