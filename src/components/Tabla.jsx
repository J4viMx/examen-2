import { useEffect } from "react"

import { fetchAllList, subirPagina, disminuirPagina } from '../features/datosExamen/datosSlice'
import { useDispatch, useSelector } from "react-redux"


const Tabla = () => {

    const {list, pagina} = useSelector(state => state.datos)

    

    
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
                                <td>
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

            <p>Total de datos: {list.length}</p>

            <button onClick={ e => {dispatch(disminuirPagina())} }>Anterior</button>
            <p>Pagina: {pagina}</p>
            <button onClick={ e => {dispatch(subirPagina())} }>Siguiente</button>

        </>
    )
}
export default Tabla