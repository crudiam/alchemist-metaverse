import  { Component } from 'react';
interface Props {
    onDocumentationClick: () => void;
}

class SampleThreeEnv extends Component<Props> {
    private mount;

    componentDidMount() {
        /**
         * @todo: create the app.
         */
        // this.mount.appendChild( renderer.domElement );
    }


    renderCrucibleMessage() {
        return (
            <h1 style={{ position: 'absolute', right: 50, top: 50, color: 'white'}}>
                Crucible Book
            </h1>
        );
    }
    
    renderDocumentationMessage() {
        return (
            <h1 style={{ position: 'absolute', right: 50, top: 50, color: 'white'}}>
                FAQ
            </h1>
        );
    }

    render() {
        return (
            <div>
                <div ref={ref => (this.mount = ref)} />
            </div>
        )
    }

}


export default SampleThreeEnv;