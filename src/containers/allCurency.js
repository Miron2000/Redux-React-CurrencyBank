import React from 'react';
import { connect } from 'react-redux';
import { getAllCurrency } from '../store/actions/postListActions';
import AllCurrencyForm from "../components/AllCurencies/allCurrencyForm";
import { Table, Form } from 'react-bootstrap';
import s from '../components/AllCurencies/AllCurrencyForm.module.css';
import LanguageContext from '../LanguageContext/LanguageContext';


const tableArray = ['Банк', 'Валюта', 'Покупка', 'Продажа'];

class allCurrency extends React.Component {
    state = {
        language: this.context
    }

    languageChange = (event) => {
        console.log(event.target.checked)
        this.setState({
            language: event.target.checked ? 'en' : 'ru'
        })
    }

    static contextType = LanguageContext;


    componentDidMount() {
        this.props.getAllCurrency();
    }


    render() {
        return (
            <LanguageContext.Provider value={this.state.language}>
                <div>
                    Ru
        <Form.Check onChange={this.languageChange}
                        type="switch"
                        id="custom-switch"
                        label="Check this switch"
                    />
                    En
      </div>
                <div>
                    <Table striped bordered hover className={s.table}>
                        <thead>
                            <tr>
                                {tableArray.map(item => <th className={s.allcurrencyForm_th}>{item.toUpperCase()}</th>)}
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