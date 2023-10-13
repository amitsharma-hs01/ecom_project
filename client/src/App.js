
import './App.css';
import Layout from './components/Layout';


function App() {
  return (
    <Layout>
      <div>yo yo yo {process.env.REACT_APP_ID}</div>
    </Layout>
  );
}

export default App;
