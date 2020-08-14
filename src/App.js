import React, {Component} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.scss';
import Title from './components/Title';


class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            qcm: [],
            badge: []
        }
    }
    

    componentDidMount() {
        axios.get("http://localhost:3000/data/mydata.json")
        .then(response => {
            console.log(response.data)
            this.setState({
                qcm: response.data.qcm,
                badge: response.data.qcm
            })
        })
    }

 render() {
     const { qcm } = this.state
  return (
    <div className="container">
        <Title qcm={qcm} />
    </div>
  )
 }
}

export default App;
