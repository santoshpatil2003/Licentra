import { Box } from '@mui/joy';
import SideBar from './Components/SideBar';
import Main from './Components/Main';
import { React, useState, useEffect } from 'react';
import SellersAddCollections from './Pages/SellersAddCollections';
import BuyersDataPage from './Pages/BuyersDataPage';
import { downloadSong, getSeller, getUserBack } from './Backend/Data';
import CollectionPage from './Pages/CollectionPage';
import SideBarBuyer from './Components/SideBarBuyer';
import BuyerMainPage from './Pages/BuyerMainPage';
import CollectionPageBuyer from './Pages/CollectionPageBuyer';




function App({ uid }) {
  const [selected, setSelected] = useState(0);
  // const [isSignUpP, setIsSignUpP] = useState(true);
  let [user, userf] = useState('');

  useEffect(() => {
    console.log(uid)
    const fetchUser = async () => {
      try {
        const result = await getUserBack(uid); 
        if (result.success) {
          console.log('User data:', result.data);
          userf(result.user); // Update state
        } else {
          console.error('Error:', result.message || result.error);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser(); 
    console.log(user)
    return () => {};
  }, [user]); 

  if (user === 'seller') {
    return (<Box bgcolor={'#070C12'} display={"flex"} flexDirection={'row'} maxHeight={'100vh'}>
      <SideBar uid={uid} select_click={setSelected} selected={selected}></SideBar>
      {selected === 0 ? <Main></Main> : selected === 1 ? <CollectionPage uid={uid}></CollectionPage> : selected === 2 ? <SellersAddCollections uid={uid}></SellersAddCollections> : <BuyersDataPage></BuyersDataPage>}
    </Box>);
  }else if (user === 'buyer'){
    return (
      (<Box bgcolor={'#070C12'} display={"flex"} flexDirection={'row'} maxHeight={'100vh'}>
        <SideBarBuyer uid={uid} select_click={setSelected} selected={selected}></SideBarBuyer>
        {selected === 0 ? <BuyerMainPage uid={uid} ></BuyerMainPage> : <CollectionPageBuyer uid={uid}></CollectionPageBuyer>}
      </Box>)
    );
  }
}

export default App;




// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>