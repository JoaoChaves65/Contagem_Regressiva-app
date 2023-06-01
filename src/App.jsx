import Title from './component/title';
import Counter from './component/counter';

import background from './assets/background.jpg';

import useCountdown from './hooks/useCountdown';

import './App.css';

function App() {
  const x = useCountdown("Jan 1, 2023 00:00:00")
  
  return (

    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2023"/>
        <div className="countdown-container">
          <Counter title="Dias" number={2}/>
          <Counter title="Horas" number={2}/>
          <Counter title="Minutos" number={2}/>
          <Counter title="Segundo" number={2}/>
        </div>
      </div>
    </div>
  )
};

export default App;
