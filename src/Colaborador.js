import { useState } from "react"
import { BaseColaboradores } from "./BaseColaboradores.js"
import { Accordion } from 'react-bootstrap-accordion'
import 'bootstrap/dist/css/bootstrap.css';

const Colaborador = () => {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [busqueda, setBusqueda] = useState("")

    const [listaBusqueda, setListaBusqueda] = useState([])
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

    const crearColaborador = (event) => {
        event.preventDefault()
        setListaColaboradores([...listaColaboradores, {id: (listaColaboradores.length+1).toString(), nombre: nombre, correo: correo}])
        console.log(listaColaboradores)
    }

    const eliminarColaborador = id => {
      const colaboradoresFiltradas = listaColaboradores.filter(colaborador => colaborador.id !== id)
      setListaColaboradores(colaboradoresFiltradas)
    }

    const hacerBusqueda = (event) => {
      event.preventDefault()
      const colaboradoresFiltradas = listaColaboradores.filter(colaborador => colaborador.nombre.toLowerCase().includes(busqueda))
      setListaBusqueda(colaboradoresFiltradas)
    }

    return (
      <div>
        <div className="panel panel-primary">
          <h1> Base de datos de Colaboradores </h1>
        </div>
        <Accordion title="Busqueda">
          <div className="content">
            <div className="form-group">
              <label> Filtrar por nombre </label>
              <form onSubmit={hacerBusqueda}>
                <input name="busqueda" className="form-control" onChange={(e) => { setBusqueda(e.target.value)  }} /> 
                <button type="submit" className="btn btn-primary"> Buscar </button>
              </form>
            </div>
            <ul className="list-group">
              {listaBusqueda.map(colaborador =>
                <li className="list-group-item" key={colaborador.id} >
                  <span> {colaborador.nombre} - {colaborador.correo}
                    <span className="badge bg-secondary" onClick={() => eliminarColaborador(colaborador.id) } > eliminar </span>
                  </span>
                </li>)}
            </ul>
          </div>
        </Accordion>

        <Accordion title="Crear Colaborador">
          <div className="content">
            <form onSubmit={crearColaborador}>
              <div className="form-group">
                <label> Nombre </label>
                <input className="form-control" name="nombre" onChange={(e) => { setNombre(e.target.value)  }} /> 
              </div>
              <div className="form-group">
                <label> Correo </label>
                <input className="form-control" name="correo" onChange={(e) => { setCorreo(e.target.value) }} /> 
              </div>
              <button type="submit" className="btn btn-primary"> Agregar Colaborador </button>
            </form>
          </div>
        </Accordion>

        <Accordion title="Listado">
          <ul className="list-group"> 
            {listaColaboradores.map(colaborador =>
              <li  className="list-group-item" key={colaborador.id} >
                  <span> {colaborador.nombre} - {colaborador.correo}
                    <span className="badge bg-secondary" onClick={() => eliminarColaborador(colaborador.id) } > eliminar </span>
                  </span>
              </li>)}
          </ul>
        </Accordion>
        

        
      </div>
    )
  }
  
  export default Colaborador;