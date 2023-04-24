import App from "../App";
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
      
      configurationCascheCleanDelete:()=>dispatch(configurationCascheCleanDelete())
      
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(App);