//import { Provider } from 'react-redux'
//import { configureStore } from '@reduxjs/toolkit'
import Layout from '../components/Layout'
import '../styles/global.css'

function MyApp({Component,pageProps}){
    return <Layout><Component{...pageProps} /></Layout>
    //return <Provider store={configureStore}><Component{...pageProps} /></Provider>
}


export default MyApp