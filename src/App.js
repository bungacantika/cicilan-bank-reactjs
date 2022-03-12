import React, { Component } from "react";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      nominal: null,
      bunga: null,
      periode: null,
      cicilan: null
    }
  }

  Hitung = () => {
    let nominal = this.state.nominal;
    let bunga = this.state.bunga;
    let periode = this.state.periode;
    let cicilan = (nominal / (periode)) + ((nominal * ((bunga) / 100)) / (periode));
    this.setState({
      cicilan
    });
  }

  changeNominal = (event) => {
    this.setState({
      nominal: event.target.value
    });
  }

  changeBunga = (event) => {
    this.setState({
      bunga: event.target.value
    });
  }

  changePeriode = (event) => {
    this.setState({
      periode: event.target.value
    });
  }

  render() {
    return (
      <div className="App-header">
        <div className="container col-md-6 pt-3">
          <div className="card-header bg-primary text-center text-white">
            <h3>Cicilan Bank</h3>
          </div>
          <div className="card-body">
            <div className="form-group mb-3">
              <label>Nominal :</label>
              <input type="number" className="form-control" onChange={this.changeNominal}></input>
            </div>
            <div className="form-group mb-3">
              <label>Bunga :</label>
              <input type="number" className="form-control" onChange={this.changeBunga}></input>
            </div>
            <div className="form-group mb-3">
              <label>Periode :</label>
              <select className="form-control" onChange={this.changePeriode}>
                <option value={3}>3 Bulan</option>
                <option value={6}>6 Bulan</option>
                <option value={9}>9 Bulan</option>
                <option value={12}>12 Bulan</option>
                <option value={15}>15 Bulan</option>
                <option value={24}>24 Bulan</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <button className="btn btn-primary form-control" onClick={this.Hitung}>Hitung</button>
            </div>
            <div class="card-footer">
            <h5 className="alert alert-success">Rp.{this.state.cicilan},00</h5>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;