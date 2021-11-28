import style from './App.module.scss';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <div className={style.container}>
      <h1>Hello React</h1>
      <Button>Click Me!</Button>
      <Card>
        Hello Card!
      </Card>
      <Button color='secondary'>Secondary</Button>
      <Button color='accent'>Accent</Button>

      <div>
        <Button color='primary' variant='outline'>Primary</Button>
        <Button color='secondary' variant='outline'>Secondary</Button>
        <Button color='accent' variant='outline'>Accent</Button>
      </div>
    </div>
  );
}

export default App;
