import { Navigate } from "react-router-dom";

const Dog = ({name,age,src,facts}) => {
    const allFacts = facts.map((fact,id) => <li key={id}>{fact}</li>)
    return(
        <div className="Dog">
            <ul onClick={<Navigate to={name}/>}>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li><img src={src} alt={name} width="500" height="600"></img></li>
                <ul>{allFacts}</ul>
            </ul>

        </div>
    )
}

export default Dog;