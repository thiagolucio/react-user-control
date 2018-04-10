import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            ValorDoBotao: "Estado inicial do botao"
        };
    };
    _mudaValorDoBotao() {
        this.setState({
            ValorDoBotao: "Segundo estado do botao onMouseOver"
        });
    };
    _voltarValorDoBotao() {
        this.setState({
            ValorDoBotao: "Terceiro estado do botao onMouseOut"
        })
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Este é o formulário que deverá ser criado para cadastro</h1>
                <input type="text" placeholder={this.props.placeholder} />
                <button onMouseOver={() => this._mudaValorDoBotao()} onMouseOut={() => this._voltarValorDoBotao()}>{this.state.ValorDoBotao}</button>
            </div>
        );         
    };
};