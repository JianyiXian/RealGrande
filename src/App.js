import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'

import HouseDetail from './components/HouseDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchFilter from './components/SearchFilter';
import Searchresults from './components/Searchresults';
import SearchHouseDetail from './components/SearchHouseDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import EnquiryList from './components/EnquiryList';


function App() {

  const [houseData, setHouseData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {

        // Load the house data from house.json to data object
        // const response = await fetch('http://localhost:3002/');

        // const data = await response.json();

        const response = await axios.get(process.env.REACT_APP_BACKEND_URL);
        const data = await response.data;

        // Write the data to the state so we can use it anywhere in the component
        setHouseData(data)

      } catch (error) {
        console.log('fetch error:', error);
      }

    };
    fetchData();

  }, [])

  let randomIndex = Math.floor(Math.random() * 10);


  return (
    <div className='container-fluild'>
      <Header />
      <div className='content'>
        {/* <Search /> */}
        {houseData && <SearchFilter houses={houseData} />}
        <Routes>
          <Route path='/' element={houseData && <HouseDetail houseInfo={houseData[randomIndex]} />} />
          <Route path='/searchresults/:county' element={houseData && <Searchresults houses={houseData} />} />
          <Route path='/searchHouseDetail/:id' element={houseData && <SearchHouseDetail houses={houseData} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/enquries' element={<EnquiryList />} />
        </Routes>
      </div>
      <Footer />

    </div>
  );
}

export default App;
