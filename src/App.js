import React from 'react';
import Child from './Child';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemperature: '',
      currentUnit: 'c'
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  tempUnits = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  toCelsius(tempF) {
    return (tempF - 32) * 5/9;
  }

  toFahrenheit(tempC, ) {
    return (9/5 * tempC) + 32;
  }
  
  handleCelsiusChange(value) {
    this.setState({currentUnit: 'c', currentTemperature: value});
  }

  handleFahrenheitChange(value) {
    this.setState({currentUnit: 'f', currentTemperature: value});
  }

  tryConvert(temp, converter) {
    let temperature = parseFloat(temp);
    if(Number.isNaN(temperature)) {
      return '';
    }
    temperature = Math.round(
      converter(temperature) * 1000
      ) / 1000;
    return temperature.toString();
  }

  render() {
    const scale = this.state.currentUnit;
    const temperature = this.state.currentTemperature;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;

    return (
      <div>
        <h1>Temperature converter</h1>
        <Child temp={celsius} onChange={this.handleCelsiusChange} scale={"c"} />
        <Child temp={fahrenheit} onChange={this.handleFahrenheitChange} scale={"f"} />
        <div>
          {celsius >= 100 ? "The water is boiling" : "Not boiling yet"}
        </div>
      </div>
    );
  }
}

export default App;
