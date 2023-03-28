import { useNavigate } from "react-router-dom"
const Dogs = (props) => {
    const navigate = useNavigate();

    return(
        <div className="Dogs">
            {props.AllDogs.map((dog,id) => <img onClick={() => navigate(dog.name)} key={id} src={dog.src} alt={dog.name} width="500" height="600"></img>)}
        </div>
    )
}

export default Dogs