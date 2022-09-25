import React from 'react';


class Square extends React.Component {
/***
 * Como un siguiente paso, queremos que el componente Square “recuerde” 
 * que fue clickeado, y se rellene con una marca de “X”. 
 * Para “recordar” cosas, los componentes usan estado.
 * Primero, vamos a agregar el constructor a la clase para inicializar el estado:
 */
  
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
    };
  }

  render() {
    return (
      <button 
      className="square" 
      onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

export default Game;