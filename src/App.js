import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Level from './Level';
import Tables from './Tables';
import './App.css';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [states, setStates] = useState([]);
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState({});


  useEffect(() => {
    getStates();
  }, [])

  const getStates = async() => {

      const [
        {data},
        {data: stateDistrictWiseResponse},
        ] = await Promise.all([
        axios.get('https://api.covid19india.org/data.json'),
        axios.get('https://api.covid19india.org/state_district_wise.json'),
        axios.get('https://api.covid19india.org/state_test_data.json'),
      ]);

      setStates(data.statewise);
      setStateDistrictWiseData(stateDistrictWiseResponse);
  }
  return (
    <div clasName = "main">
      <Header/>
    <div className="content">
      {states && <Level data = {states[0]}/>}
      {states && 
        <Tables
          states={states}
          district={stateDistrictWiseData}
        />
      }
    </div>
    <Footer/>
    </div>
  )
}

export default App;