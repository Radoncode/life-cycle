import { Component } from "react";

class ChildComponent extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            
        }
        console.log(`Je suis dans le constructor() enfant`)
    }

    componentDidMount() {
        console.log(`Je suis dans le componentDidMount() enfant`)
    }

    render() {
        console.log(`Je suis dans le render() enfant`)
        return (
            <div>
                { console.log('Mise à jour DOM dans composant enfant')}
                Hello world
            </div>
        );
    }
}

export default ChildComponent;