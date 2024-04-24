import { ContainerLayaout } from "./utilis/layout"

function Hijo(props) {
      return(
        <div>
          <ContainerLayaout />
          <p>{props.datos}</p>;        
        </div>
         
      )    
}

export default Hijo