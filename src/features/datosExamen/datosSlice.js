import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const datosSlice = createSlice({
  name: "datos",
  initialState: {
    list: [],
  },
  reducers: {
    setList: (state, action) => {
        state.list = action.payload;
    }
  },
});

export default datosSlice.reducer;

export const { setList } = datosSlice.actions;

export const fetchAllList = () => (dispatch) => {
  axios
    .get("https://api.datos.gob.mx/v1/condiciones-atmosfericas")
    .then((response) => {
        dispatch(setList(response.data.results))
    })
    .catch((error) => console.log(error));
};
