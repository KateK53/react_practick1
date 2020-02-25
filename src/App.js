import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count/Count";
import Button from "./components/button/Button";

class App extends React.Component {

  // console.log('props');
  // console.log(props);

  // funC();
  // return (
  //   <div className="App">
  //    <h1>{Msg}</h1>
  //   </div>
  // );

    constructor(props) {
        super(props);

        console.log('constructor');

        // console.log(props);

        this.state = {
            count: 0,
         data: null
        }
    // this.hadler = this.hadler.bind(this);


    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps');
        console.log(prevProps);
        console.log('prevState');
        console.log(prevState);



    }

    hadler =()=> {
        // console.log('clik')
        this.setState({count: this.state.count+1})

    }

    render () {
    console.log('render');
    const {count,data} = this.state;

        return (
            <div className="App">
                <Count count={count}/>
                <Button myFunc={this.hadler}/>

            </div>
        );

    }
}

export default App;
