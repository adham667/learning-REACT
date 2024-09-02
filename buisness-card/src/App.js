import './App.css';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import image from "./WhatsApp Image 2024-03-08 at 11.07.12 PM.jpeg"
function App() {
  return (
    <div className="card">
      <img src={image} className='image'/>
      <PageContent/>
      <Footer/>
    </div>
  );
}

export default App;
