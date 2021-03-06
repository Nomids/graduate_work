import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import BagCard from '../../BagCard'

import './Bag.scss';

const Bag = ({bagData}) => {
    console.log(bagData);

    const renderBottom = bagData.length ? (
        <div className="bag-bottom d-flex justify-content-end">
            <div className="bag-bottom-wrapper d-flex align-items-center">
                <p className="bag-price">Итоговая стоимость: <span>69 960₽</span></p>
                <button className="bag-button">Оформить заказ</button>
            </div>
        </div>
    ) : null;
    return (

        <div className="bag">
            <Container>
                <div className="bag-header d-flex justify-content-between">
                    <p>Ваша корзина</p>
                    <p><span>{bagData.length}</span> предмета</p>
                </div>
                <div style={{minHeight: "550px"}} className="bag-wrapper mt-2">
                    {
                        bagData.map(el => {
                            return <BagCard key={el._id} id={el._id} data={el}/>
                        })
                    }
                </div>
                {renderBottom}
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bagData: state.bag
    }
}

export default connect(mapStateToProps)(Bag);
