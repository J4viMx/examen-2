import { useEffect } from "react"

import { fetchAllList } from '../features/datosExamen/datosSlice'
import { useDispatch } from "react-redux"


const Tabla = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllList())
    }, [dispatch])
    

    return (
        <div>alo</div>
    )
}
export default Tabla