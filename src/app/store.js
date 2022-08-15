import { configureStore } from '@reduxjs/toolkit'
import datosReducer from "../features/datosExamen/datosSlice";

export const store = configureStore({
    reducer: {datos: datosReducer},
})

