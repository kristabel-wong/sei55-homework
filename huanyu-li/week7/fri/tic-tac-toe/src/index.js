

import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'



const Square = (props) => {

    return (
        <button
            className = {`square ${props.highlight ? 'highlight' : null}`}
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        const highlight = this.props.highlight
        return (
            <Square
                key={i}
                highlight={highlight ? highlight.includes(i):false}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    renderCols(rowNumber) {
        const cols = []
        for (let i = 0; i < 3; i++) {
            cols.push(this.renderSquare(i + rowNumber * 3))
        }
        return cols
    }

    renderRows() {
        const rows = []
        for (let i = 0; i < 3; i++) {
            rows.push(<div key={i} className="board-row">{this.renderCols(i)}</div>)
        }
        return rows
    }

    render() {

        return (
            <div>
                {this.renderRows()}
            </div>
            // <div>
            //     {this.renderBoard()}

            //     <div className="board-row">
            //         {this.renderSquare(0)}
            //         {this.renderSquare(1)}
            //         {this.renderSquare(2)}
            //     </div>
            //     <div className="board-row">
            //         {this.renderSquare(3)}
            //         {this.renderSquare(4)}
            //         {this.renderSquare(5)}
            //     </div>
            //     <div className="board-row">
            //         {this.renderSquare(6)}
            //         {this.renderSquare(7)}
            //         {this.renderSquare(8)}
            //     </div>
            // </div>
        );
    }
}

class Game extends React.Component {

    handleClick(i) {

        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()

        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'

        this.setState({
            history: history.concat(
                [{
                    squares: squares,
                    locations: i
                }]
            ),

            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        })

    }

    jumpTo(step) {
        this.setState({
            history: this.state.history.slice(0, step + 1),
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    state = {
        history: [{
            squares: Array(9).fill(null),
            locations: null,
        }],
        xIsNext: true,
        stepNumber: 0,
        isAscendOrder: true
    }


    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)

        let status = null
        let highlightSquares = null
        console.log(this.state.stepNumber);
        
        if (winner) {
            status = `Winner: ${winner[0]}`
            highlightSquares = winner[1]
        } else if(this.state.stepNumber === 9){
            status = 'Draw'
        } else {
            status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`
        }

        let moves = history.map((step, move) => {
            const player = step.squares[step.locations]
            const location = step.locations
            const col = location % 3 + 1
            const row = Math.floor(location / 3) + 1
            const desc = move ? `Go to move #${move}: Player: ${player}, Location: row: ${row} | col: ${col}` : `Go to game start`

            const isStrong = move === this.state.stepNumber ? 'bold' : null

            return (
                <li key={move}>
                    <button onClick={() => {
                        this.jumpTo(move)
                    }} className={isStrong}>{desc}</button>
                </li>
            )
        })

        const handleOrder = () => {
            this.setState({
                isAscendOrder: !(this.state.isAscendOrder)
            })
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick=
                        {i => this.handleClick(i)}
                        highlight = {highlightSquares}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <br/>
                    <button onClick={handleOrder}>Change to: {this.state.isAscendOrder ? 'Descending' : 'Ascending'}</button>
                    <ol>{this.state.isAscendOrder ? moves : moves.reverse()}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

// ================================

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    
            return [squares[a],[a,b,c]];
        }
    }
    return null;
}