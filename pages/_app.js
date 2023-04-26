//import { Provider } from 'react-redux'
//import { configureStore } from '@reduxjs/toolkit'
import Layout from '../components/imi/Layout'
import '../styles/global.css'

function MyApp({Component,pageProps}){
    return <Component{...pageProps} />//<Layout></Layout>
    //return <Provider store={configureStore}><Component{...pageProps} /></Provider>
}


export default MyApp