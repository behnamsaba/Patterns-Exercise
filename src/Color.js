import { useParams } from "react-router-dom";
import './Color.css'


const Color = () => {
    const name = useParams();
    return(
        <div className="Color" style={{ backgroundColor: name.name}}>
      </div>
    )

}

export default Color;