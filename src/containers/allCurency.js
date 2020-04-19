import React from 'react';
import { connect } from 'react-redux';
import { getAllCurrency } from '../store/actions/postListActions';
import AllCurrencyForm from "../components/AllCurencies/allCurrencyForm";
import { Table, Form } from 'react-bootstrap';
import s from '../components/AllCurencies/AllCurrencyForm.module.css';
import LanguageContext from '../LanguageContext/LanguageContext';


const tableArrayRu = ['Банк', 'Валюта', 'Покупка', 'Продажа'];
const tableArrayEn = ['Bank', 'Currency', 'Buy', 'Sell'];


class allCurrency extends React.Component {
    state = {
        language: this.context,
        head: tableArrayRu
    }

    languageChange = (event) => {
        console.log(event.target.checked)
        this.setState({
            language: event.target.checked ? 'en' : 'ru',
            head: event.target.checked ? tableArrayEn : tableArrayRu
        })
    }

    static contextType = LanguageContext;


    componentDidMount() {
        this.props.getAllCurrency();
    }


    render() {
        return (
            <div className={s.background}>
                <LanguageContext.Provider value={this.state.language}>

                    <div className={s.flex}>
                        <h5 className={s.textSwitch}>Ru</h5>
                        <Form.Check onChange={this.languageChange}
                            type="switch"
                            id="custom-switch"
                            label=""
                        />
                        <h5 className={s.textSwitch}>En</h5>
                    </div>

                    <div>
                    {/* variant="dark" */}
                        <Table striped bordered hover  className={s.table}>
                            <thead>
                                <tr>

                                    {this.state.head.map(item => <th className={s.allcurrencyForm_th}>{item}</th>)}
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.allCurrency.currencies.usd && this.props.allCurrency.currencies.usd.map(item => <AllCurrencyForm currency={item} />)}
                                {this.props.allCurrency.currencies.eur && this.props.allCurrency.currencies.eur.map(item => <AllCurrencyForm currency={item} />)}
                                {this.props.allCurrency.currencies.rub && this.props.allCurrency.currencies.rub.map(item => <AllCurrencyForm currency={item} />)}
                            </tbody>
                        </Table>
                    </div>
                </LanguageContext.Provider>
            </div>
        )
    };
}



const mapStateToProps = (state) => {
    return {
        allCurrency: state.allCurrency
    }
};
//обєкт який буде містити наші матоди(actions)
const mapDispatchToProps = {
    getAllCurrency
};


export default connect(mapStateToProps, mapDispatchToProps)(allCurrency);