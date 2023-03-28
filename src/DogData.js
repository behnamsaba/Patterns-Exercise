import { useParams } from "react-router-dom";
const DogData = (props) => {
    console.log(props.AllDogs);
    const namePar = useParams();
    const info = props.AllDogs.filter(dog => (dog.name === namePar.namePar));
    const facts = info[0].facts.map(fact => <li>{fact}</li>)
    return(
        <div className="DogData">
            <ul>
                <li>Name:{info[0].name}</li>
                <li>Age: {info[0].age}</li>
                <li><img src={info[0].src} alt={info.name} width="500" height="600"></img></li>
                {facts}
            </ul>

        </div>
    )
}

export default DogData;