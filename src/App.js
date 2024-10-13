import './App.css';
import Contact from './components/ContactForm/Contact';
import ContactHeader from './components/contactHeader/contactHeader';
import Navigation from './components/Navigation/navigation';

function App() {
  return (
    <div>
    <Navigation/>
    <ContactHeader/>
    <Contact/>
    </div>
  );
}

export default App;
