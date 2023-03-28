import { Link } from "react-router-dom"
const Colors = ({colors}) => {
    console.log(colors);
    return(
        <div className="Colors">
            <Link to="/colors/new">Add Color</Link>
            <h3>Or select from below Colors:</h3>
            {colors.map((color,id) => (<Link key={id} to={'/colors/' + color.color}>{color.color}</Link>))}

        </div>
    )
}

export default Colors