
import React from "react";
import Square from './Square';


class Board extends React.Component {

    // state = {

    //     squares: Array(9).fill(null),
    //     xIsNext: true,

    // } // state


    // handleClick(i){

    //     const squares = this.state.squares.slice();
    //     if (calculateWinner(squares) || squares[i]) {
    //         return;
    //     }

    //     squares[i] = this.state.xIsNext ? 'X' : 'O';
    //     this.setState({
    //         squares: squares,
    //         xIsNext: !this.state.xIsNext,
    //     });

    // } // handleClick

    renderSquare(i){

        return (

            <div>
                <Square value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}/>
            </div>

        ) //return

    } // renderSquare

    render(){

        // const winner = calculateWinner(this.state.squares);
        // let status;

        // if (winner) {
        //     status = 'Winner:' + winner;
        // } else {
        //     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // }

        return (
            <div>
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
        ) // return

    } // render
    


}; // class Board

// function calculateWinner(squares){
    
//     const lines = [
        
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6],
//     ];

//     for (let i = 0; i < lines.length; i++) {
        
//         const [a,b,c] = lines[i];

//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
        
//     }
//     return null;
    
// } // calculateWinner


// const history = [
//     // Before first move
//     {
//       squares: [
//         null, null, null,
//         null, null, null,
//         null, null, null,
//       ]
//     },
//     // After first move
//     {
//       squares: [
//         null, null, null,
//         null, 'X', null,
//         null, null, null,
//       ]
//     },
//     // After second move
//     {
//       squares: [
//         null, null, null,
//         null, 'X', null,
//         null, null, 'O',
//       ]
//     },
//     // After third move
//     {
//     squares: [
//         'X', null, null,
//         null, 'X', null,
//         null, null, 'O',
//       ]
//     },
//     // After fourth move
//     {
//         squares: [
//         'X', null, 'O',
//         null, 'X', null,
//         null, null, 'O',
//       ]
//     },
//     // After fifth move
//     {
//         squares: [
//         'X', null, 'O',
//         null, 'X', null,
//         'X', null, 'O',
//       ]
//     },
//     // After sixth move
//     {
//         squares: [
//         'X', null, 'O',
//         'O', 'X', null,
//         'X', null, 'O',
//       ]
//     },
//     // After seventh move
//     {
//         squares: [
//         'X', null, 'O',
//         'O', 'X', 'X',
//         'X', null, 'O',
//       ]
//     },
//      // After eigth move
//     {
//         squares: [
//         'X', 'O', 'O',
//         'O', 'X', 'X',
//         'X', null, 'O',
//       ]
//     },
//     // After last move
//     {
//         squares: [
//         'X', 'O', 'O',
//         'O', 'X', 'X',
//         'X', 'X', 'O',
//       ]
//     },

// ] // history

export default Board;