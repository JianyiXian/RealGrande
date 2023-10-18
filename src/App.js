import './App.css';
import HouseDetail from './components/HouseDetail';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import SearchFilter from './components/SearchFilter';
import { Route, Routes } from 'react-router-dom';
import Searchresults from './components/Searchresults';
import SearchHouseDetail from './components/SearchHouseDetails';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {

  const [houseData, setHouseData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {

        // Load the house data from house.json to data object
        const response = await fetch('/house.json');
        const data = await response.json();

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
    <div>
      <Header />
      {/* <Search /> */}
      {houseData && <SearchFilter houses={houseData} />}
      <Routes>
        <Route path='/' element={houseData && <HouseDetail houseInfo={houseData[randomIndex]} />} />
        <Route path='/searchresults/:county' element={houseData && <Searchresults houses={houseData} />} />
        <Route path='/searchHouseDetail/:id' element={houseData && <SearchHouseDetail houses={houseData} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
