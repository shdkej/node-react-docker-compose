import React, { Component } from 'react';
import Square from './Square.js';
import JsonData from './data.json';

const PostData = JsonData.map((Detail) => {return Detail.title});
const mainSquare = 9;

class Board extends Component {
    constructor() {
        super();
        this.state = { 
            squares: PostData,
            depth: 0,
            link: "#1",
        };
        this.state.squares[mainSquare] = 'Goal';
        console.log(JsonData[0].link);
    }

    renderSquare(i) {
        var squareName = 'square';
        if (i === mainSquare) {
            squareName += ' mainSquare';
        }
        return <Square 
                className={squareName}
                //value=<a href={this.state.link[i]}>{this.state.squares[i]}</a>
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />;
    }

    handleClick(i) {
        if (i === mainSquare) {
            this.setState({squares: PostData, depth: 0, link: 0})
            return
        }

        const Post = JsonData[i][PostData[i]];
        const PostLink = JsonData[i].link;
        const PostDetail = Post ? Post.map(s => s) : Array(9).fill("Not Yet");
        PostDetail[mainSquare] = PostData[i]; // Main square box name to Parent name
        this.setState({squares: PostDetail, depth: 1, link: PostLink})
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div>
                    {this.renderSquare(3)}
                    {this.renderSquare(mainSquare)}
                    {this.renderSquare(4)}
                </div>
                <div>
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                </div>
            </div>
        );
    }
}

export default Board;
