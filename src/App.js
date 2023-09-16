import Container from './Container';
import './App.css';
import Footer from './Footer';
import Form from './Form';

function App() {
  return (
    <Container>
      <Form />
      <Footer title="Kursy walut z dnia 23.07.23" />
    </Container>
  );
};

export default App;
