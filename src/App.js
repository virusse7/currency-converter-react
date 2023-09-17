import Container from './Container';
import './App.css';
import Footer from './Footer';
import Form from './Form';
import Legend from './Legend';

function App() {
  return (
    <Container>
      <Form
        footer={<Footer body="Kursy walut z dnia 23.07.23" />}
        legend={<Legend legend="Kalkulator walutowy" />}
      />
    </Container>
  );
};

export default App;
