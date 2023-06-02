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
          <Counter title="Horas" number={hour > 9 ? hour : '0' + hour}/>
          <Counter title="Minutos" number={minute > 9 ? minute : '0' + minute}/>
          <Counter title="Segundo" number={second > 9 ? second : '0' + second}/>
        </div>
      </div>
    </div>
  )
};git 

export default App;
