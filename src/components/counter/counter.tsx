import React from 'react';
import './counter.css';

export type CounterProps = {
    initialValue?: number
}

export type CounterState = {
    currentValue: number
}

export class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    this.state = {
      currentValue: props.initialValue || 0,
    };
  }

  render() {
    const handleIncrement = () => {
      new Array(100).fill(null).forEach(() => {
        this.setState((prevState) => {
          const updatedValue = prevState.currentValue + 1;
          console.log({ oldValue: prevState.currentValue, updatedValue });
          return { currentValue: updatedValue };
        });
      });
    };

    const { currentValue } = this.state;
    console.log({ message: 'rendering' });

    return (
      <div className="counter">
        <div className="counter__message">{`Current Value: ${currentValue}`}</div>
        <button className="counter__increment" onClick={handleIncrement} type="button">increment</button>
      </div>
    );
  }
}
