import {setModal} from '../features/datosExamen/datosSlice'
import { useDispatch, useSelector  } from 'react-redux'

const Modal = ({dataModal}) => {

    const dispatch = useDispatch()

    console.log(dataModal)

    return (
        
        <div className="modal" onClick={() => {dispatch(setModal())}}>

            <div className="contenido">
                <p>id = {dataModal?._id}</p>
                <p>validdateutc = {dataModal?.validdateutc}</p>
                <p>winddirectioncardinal = {dataModal?.winddirectioncardinal}</p>
                <p>probabilityofprecip = {dataModal?.probabilityofprecip}</p>
                <p>relativehumidity = {dataModal?.relativehumidity}</p>
                <p>name = {dataModal?.name}</p>
                <p>longitude = {dataModal?.longitude}</p>
                <p>state = {dataModal?.state}</p>
                <p>lastreporttime = {dataModal?.lastreporttime}</p>
                <p>skydescriptionlong = {dataModal?.skydescriptionlong}</p>
                <p>stateabbr = {dataModal?.stateabbr}</p>
                <p>tempc = {dataModal?.tempc}</p>
                <p>latitude = {dataModal?.latitude}</p>
                <p>iconcode = {dataModal?.iconcode}</p>
                <p>windspeedkm = {dataModal?.windspeedkm}</p>
            </div>
        

        </div>
    )
}
export default Modal