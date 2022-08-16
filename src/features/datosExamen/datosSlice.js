import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const datosSlice = createSlice({
  name: "datos",
  initialState: {
    list: [],
    pagina: 10,
    modal: false
  },
  reducers: {
    setList: (state, action) => {
        state.list = action.payload;
    },
    subirPagina: (state) => {
      if(state.pagina >= 100){
        return
      }
        state.pagina += 10;
    },
    disminuirPagina: (state) => {
      if(state.pagina <= 10){
        console.log('first')
        return
      }
        state.pagina -= 10;
    },
    setModal: (state) => {
      state.modal = !state.modal
    }
  },
});

export default datosSlice.reducer;

export const { setList, subirPagina, disminuirPagina, setModal } = datosSlice.actions;

export const fetchAllList = () => (dispatch) => {
  axios
    .get("https://api.datos.gob.mx/v1/condiciones-atmosfericas")
    .then((response) => {
        dispatch(setList(response.data.results))
    })
    .catch((error) => console.log(error));
};



