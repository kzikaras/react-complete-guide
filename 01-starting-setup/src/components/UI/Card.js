import './Card.css';
function Card(props) {
    // Need to reinstate the className prop on components like this.
    const classes = 'card ' + props.className;
    // props.children allows us to place other components inside of this component.
    return <div className={ classes }>{ props.children }</div>
}

export default Card;