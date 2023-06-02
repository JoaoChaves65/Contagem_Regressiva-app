import Title from './component/title';
import Counter from './component/counter';

import background from './assets/background.jpg';

import useCountdown from './hooks/useCountdown';

import './App.css';

function App() {
  const [day, hour, minute, second] = useCountdown("Jun 6, 2023 00:00:00")
  
  return (

    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2023"/>
        <div className="countdown-container">
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundo" number={second}/>
        </div>
      </div>
    </div>
  )
};

export default App;
