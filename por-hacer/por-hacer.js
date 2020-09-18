const fs = require('fs');


let listadoProHacer = [];

const guardarBD = () => {

    let data = JSON.stringify(listadoProHacer);

    fs.writeFile('./bd/data.json', data, (err) => {
        if (err) console.error(err);
        else {
            console.log(`Tarea creada con exito`);
        }
    });
};

const crear = (descripcion) => {


    cargarBD();

    let porHacer = {
        descripcion,
        completada: false
    };

    listadoProHacer.push(porHacer);
    guardarBD();
    return porHacer;

};

const cargarBD = () => {

    try {
        listadoProHacer = require('../bd/data.json');
    } catch (error) {
        listadoProHacer = [];
    }
};

const getListado = () => {
    cargarBD();
    return listadoProHacer;
};

const actualizar = (desc, comp = true) => {
    cargarBD();

    let index = listadoProHacer.findIndex(tarea => tarea.descripcion === desc);
    if (index >= 0) {
        listadoProHacer[index].completada = comp;
        guardarBD();
        return true;
    } else {
        return false;
    }
};

const borrar = (desc) => {
    cargarBD();
    let nuevaLista = listadoProHacer.filter(tarea => tarea.descripcion !== desc);

    if (nuevaLista.length === listadoProHacer.length) {
        return false;
    } else {
        listadoProHacer = nuevaLista;
        guardarBD();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}