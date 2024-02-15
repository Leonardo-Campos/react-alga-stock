import React from "react";

class ClassComponent extends React.Component<{name: string}> {
    state = {
        name: 'Mundo'
    }
    render() {
        return <div>
            <p>{this.state.name}</p>
            <button onClick={() => {
                this.setState({name: 'Leonardo'})
            }}>Click me</button>
        </div>
    }
}

export default ClassComponent