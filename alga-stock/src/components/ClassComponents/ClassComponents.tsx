import React from "react";

class ClassComponent extends React.Component<{name: string}> {

    constructor(props: any) {
        super(props)
        console.log('constructor reached')
    }

    state = {
        name: 'Mundo'
    }

    componentDidMount(): void {
        console.log('componentDidMount reached')
    }

    componentDidUpdate(): void {
        console.log('componentDidUpdate reached')
    }
    

    render() {
        console.log('render reached')
        return <div>
            <p>{this.state.name}</p>
            <button onClick={() => {
                this.setState({name: 'Leonardo'})
            }}>Click me</button>
        </div>
    }
}

export default ClassComponent