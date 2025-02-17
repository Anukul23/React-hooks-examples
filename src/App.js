import logo from './logo.svg';
import './App.css';
import List from './Listsandkeys/List';
import Form from './Formvalidation/Form';
import State from './Usestate/State';
import Datafetchingapi from './datafetching/Datafetchingapi';
import UseRef from './Userefhook/UseRef';
import Useref2 from './Userefhook/Useref2';
import Memovalue from './Usememohook/Memovalue';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App" style={{marginTop :"200px"  }}>
      {/* <List/> */}
      {/* <Form/> */}
      {/* <State/> */}
      {/* <Datafetchingapi/> */}
      {/* <UseRef/> */}
      {/* <Useref2/> */}
      {/* <Memovalue/> */}
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
