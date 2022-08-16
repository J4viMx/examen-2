import { useEffect, useState } from "react"

import { fetchAllList, subirPagina, disminuirPagina,  setModal } from '../features/datosExamen/datosSlice'
import { useDispatch, useSelector } from "react-redux"
import Modal from "./Modal"


const Tabla = () => {

    const {list, pagina, modal} = useSelector(state => state.datos)

    const [dataModal, setDataModal] = useState({})

    
    let listActualizada = list.slice((pagina - 10), pagina)

    console.log(listActualizada)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllList())
    }, [dispatch])
    

    return (
        <>
        
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>cityid</th>
                        <th>name</th>
                        <th>state</th>
                        <th>probability of precip</th>
                        <th>relative humidity</th>
                        <th>Last report time</th>
                        <th>Llueve</th>
                    </tr>
                </thead>
                <tbody>
                    {listActualizada.map( list  => (
                        <tr key={list._id}>
                                <td onClick={() => {setDataModal(list), dispatch(setModal())}}>
                                    {list._id}
                                </td>
                                <td>
                                    {list.cityid}
                                </td>
                                <td>
                                    {list.name}
                                </td>
                                <td>
                                    {list.state}
                                </td>
                                <td>
                                    {list.probabilityofprecip}
                                </td>
                                <td>
                                    {list.relativehumidity}
                                </td>
                                <td>
                                    {new Date(list['date-insert']).toISOString().split('T')[0]} 
                                </td>
                                { list.probabilityofprecip > 60 || list.relativehumidity > 50 ? <td>Si</td> : <td>no</td> }
                        </tr>
                        
                    ))}
                </tbody>
            </table>

            <p className="total-datos">Total de datos: {list.length}</p>

            <div className="contendorBotones">
                <button onClick={ e => {dispatch(disminuirPagina())} }>Anterior</button>
                
                <button onClick={ e => {dispatch(subirPagina())} }>Siguiente</button>
            </div>

            {modal && <Modal dataModal={dataModal}/>}

        </>
    )
}
export default Tabla