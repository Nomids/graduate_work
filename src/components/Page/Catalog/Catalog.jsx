import React, { Component } from "react";
import { Container } from "react-bootstrap";

import CatalogCard from "../../CatalogCard/CatalogCard";
import './Catalog.scss'

import Loader from '../../Loader';
import { connect } from "react-redux";

class Catalog extends Component {
  constructor(){
    super();
    this.state = {
      cards: [],
      error: false,
    }
  }

  async componentDidMount(){

    this.setState({
      cards: this.props.catalog.filter(el => el.tags[0] === this.props.match.params.tag),
      error: false,
    })
  }

  
  componentDidUpdate(prevProps) {
    if (this.props.catalog !== prevProps.catalog ||  this.props.match.params.tag !== prevProps.match.params.tag) {
      this.setState({
        cards: this.props.catalog.filter(el => el.tags[0] === this.props.match.params.tag),
      })
    }
  }

  render() {
    if(this.props.load){
      return <Loader/>
    }

    return (
      <Container>
        <div className="catalog d-flex">
          <div className="catalog-left">
            <p className="catalog-left__title">Раздел</p>
            <select className="catalog-left__drops" name="section">
              <option value="value1" defaultValue>Гостинные</option>
              <option value="value2">Значение 2</option>
              <option value="value3">Значение 3</option>
            </select>
            <select className="catalog-left__drops" name="type">
              <option value="value1" defaultValue>Мягкая мебель</option>
              <option value="value2">Значение 2</option>
              <option value="value3">Значение 3</option>
            </select>
            <select className="catalog-left__drops" name="product">
              <option value="value1" defaultValue>Диваны</option>
              <option value="value2">Значение 2</option>
              <option value="value3">Значение 3</option>
            </select>
            <p className="catalog-left__title">Цена</p>
            <p className="catalog-left__title">Бренд</p>
            <div className="catalog-left__checkbox">
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
              <label htmlFor="vehicle2">Динс</label>
            </div>
            <div className="catalog-left__checkbox">
              <input type="checkbox" id="vehicle1" name="vehicle2" value="Car"></input>
              <label htmlFor="vehicle1">Кускен</label>
            </div>
            <div className="catalog-left__checkbox">
              <input type="checkbox" id="vehicle5" name="vehicle2" value="Car"></input>
              <label htmlFor="vehicle5">Эби</label>
            </div>
            <div className="catalog-left__checkbox">
              <input type="checkbox" id="vehicle3" name="vehicle2" value="Car"></input>
              <label htmlFor="vehicle3">Реджио</label>
            </div>
            <div className="catalog-left__checkbox">
              <input type="checkbox" id="vehicle4" name="vehicle2" value="Car"></input>
              <label htmlFor="vehicle4">Сайле</label>
            </div>
          </div>
          <div className="catalog-right w-100 row">
           {
              this.state.cards.map((el, i) => {
                return <CatalogCard 
                  col="4"
                  key={el._id} 
                  id={el._id} 
                  data={el}
                />
              })
            }
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({catalog: state.catalog, load: state.catalogLoad})

export default connect(mapStateToProps)(Catalog);
