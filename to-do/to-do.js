const fs = require('fs')

let listadoTareas = [];

let guardar = () => {
    let data = JSON.stringify(listadoTareas);

    fs.writeFile('./db/db.json', data, err => {
        if (err) {
            throw new Error("ocurrio un error", err)
        }
    })
}

let cargarDb = () => {

    try {
        listadoTareas = require('../db/db.json')
    } catch (error) {
        listadoTareas = []
    }
}

let getListado = () => {

    cargarDb();

    return listadoTareas;
}

let actulizarTarea = (desc, comple = true) => {
    cargarDb();

    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === desc
    })

    if (index >= 0) {
        listadoTareas[index].completado = comple;
        guardar();
        return "tarea modificada"
    } else {
        return "esta tarea no existe"
    }
}

let borrarTarea = (desc) => {
    cargarDb();
    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === desc
    })

    if (index >= 0) {
        listadoTareas.splice(index, 1);
        guardar();
        return "tarea borrada"
    } else {
        return "esta tarea no se pudo borrar"
    }

    return index
}

let filterByCompletado = comple => {
    cargarDb();
    return listadoTareas.filter(tarea => {
        return tarea.completado.toString() === comple;
    })
}

let crearTarea = (descripcion) => {
    if (descripcion) {

        cargarDb();

        let tarea = {
            descripcion,
            completado: false
        }
        listadoTareas.push(tarea);

        guardar();

        return "Tarea guardad";

    } else {
        return "La tarea no se pudo crear"

    }
}

module.exports = {
    crearTarea,
    getListado,
    actulizarTarea,
    borrarTarea,
    filterByCompletado
}