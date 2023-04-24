import _app from "../../pages" 
import{connect} from 'react-redux';

const mapStateToProps = (state) => {
  
  return {
    //tasks:state.prova.tasks
  };
};

  const mapDispatchToProps = (
    dispatch
  ) => {
    return {
      getGetMenu:()=> dispatch(getGetMenu()),
      getAgileInstantByIndex:()=> dispatch(getAgileInstantByIndex()),
      getAgileDossierByStock:()=> dispatch(getAgileDossierByStock()),
      agileInstantByIndex:()=> dispatch(agileInstantByIndex()),
      agileDossierByStock:()=> dispatch(agileDossierByStock()),

      configurationCacheCleanDelete:()=>dispatch(configurationCacheCleanDelete())
      
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(_app);