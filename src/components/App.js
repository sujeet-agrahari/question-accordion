import './App.css';
import Accordion from '../components/accordion/accordion.component';

function App() {
  const items = [
    {
      question: 'What is React?',
      answer: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components.'
    },
    {
      question: 'What is a component?',
      answer: 'A component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.'
    },
    {
      question: 'What is state in React?',
      answer: 'React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.'
    }
  ]
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
