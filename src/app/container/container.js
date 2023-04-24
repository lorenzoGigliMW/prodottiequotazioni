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
      getMenu:()=> dispatch(getMenu()),
      agileInstantByIndex:()=> dispatch(agileInstantByIndex()),
      agileDossierByStock:()=> dispatch(agileDossierByStock()),

      configurationCacheCleanDelete:()=>dispatch(configurationCacheCleanDelete())
      
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(_app);