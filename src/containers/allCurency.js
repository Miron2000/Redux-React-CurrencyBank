import React from 'react';
import { connect } from 'react-redux';
import { getAllCurrency } from '../store/actions/postListActions';
import AllCurrencyForm from "../components/AllCurencies/allCurrencyForm";
import { Table, Form } from 'react-bootstrap';
import s from '../components/AllCurencies/AllCurrencyForm.module.css';
import LanguageContext from '../LanguageContext/LanguageContext';
import Select from '../components/AllCurencies/select';


const tableArrayRu = ['Банк', 'Валюта', 'Покупка', 'Продажа'];
const tableArrayEn = ['Bank', 'Currency', 'Buy', 'Sell'];

const translations = {
 bankText: {
    en: 'bank_name_en',
    ru: 'bank_name_ru'
},
currencyText: {
    en: 'currency_name_en',
    ru: 'currency_name_ru'
}
}

class allCurrency extends React.Component {
    state = {
        language: this.context,
        head: tableArrayRu,
        arrayBank: [],
        arrayCurrency: [],
        languageItemBank: translations.bankText.ru,
        languageItemCurrency: translations.currencyText.ru,
        filterBank:null,
        filterCurrency:null
    }

    languageChange = (event) => {
        console.log(event.target.checked)
        this.setState({
            arrayBank: [],
            arrayCurrency: [],
            filterBank:null,
            filterCurrency:null,
            language: event.target.checked ? 'en' : 'ru',
            head: event.target.checked ? tableArrayEn : tableArrayRu,
            languageItemBank: event.target.checked ? translations.bankText.en : translations.bankText.ru ,
            languageItemCurrency: event.target.checked ? translations.currencyText.en : translations.currencyText.ru 
        })
    }

    static contextType = LanguageContext;


    componentDidMount() {
        this.props.getAllCurrency();
        
    }
    componentDidUpdate(){
        this.searchBanksName();
        this.searchCurrencyName();
    }

//Отрисовка в option имен банка 
     searchBanksName = () => {
         if(!this.props.allCurrency.currencies.usd)
         return
        if (this.state.arrayBank.length > 0)
        return
        const arrayBank = [];
        const bankName = this.state.languageItemBank;
        this.props.allCurrency.currencies.usd && this.props.allCurrency.currencies.usd.map(item => arrayBank.push(item[bankName]))
   
        this.setState({
            arrayBank:arrayBank
        })
        console.log(arrayBank);
        // return arrayBank
    }
    
    //Отрисовка в option валют 
    searchCurrencyName = () => {
        if(!this.props.allCurrency.currencies)
        return
       if (this.state.arrayCurrency.length > 0)
       return
        const arrayCurrency = [];
        const currencyName = this.state.languageItemCurrency;
        this.props.allCurrency.currencies && Object.keys(this.props.allCurrency.currencies ).map(item => arrayCurrency.push(this.props.allCurrency.currencies[item][0][currencyName]));
        
       
        this.setState({
            arrayCurrency:arrayCurrency
        })
        // return arrayCurrency
    }

    createHeader = (item, index) => {
        if(index === 0){
            return <th className={s.allcurrencyForm_th}>{item}<Select 
            handleClick={this.bankSelector} 
            list={this.state.arrayBank} onChange={this.bankSelector}/></th>
        }
        else if(index === 1){
            return <th className={s.allcurrencyForm_th}>{item}<Select 
             handleClick={this.searchCurrencyName} 
            list={this.state.arrayCurrency}/></th>
        }
        else{
            return <th className={s.allcurrencyForm_th}>{item}</th>
        }
    };

    //selectedIndex - надо зайти в консоль , в option нажать на любой банк , и там будет свойство selectedIndex
    bankSelector = (event) => {
        const bankName = this.state.arrayBank[event.target.selectedIndex];
        this.setState({
            filterBank:bankName
        })
        
    }

    currencySelector = (event) => {
        const currencyName = this.state.arrayCurrency[event.target.selectedIndex];
        this.setState({
            filterCurrency:currencyName
        })
        
    }

    //Отрисовка таблицы 
    createMainItem = () =>{
        const arrayItemList = [];
        if(this.props.allCurrency.currencies){
            const currencies = this.props.allCurrency.currencies
            Object.keys(currencies).map(currency => {
                currencies[currency].map(item => {
                    if( this.state.filterBank){
                        if(item[this.state.languageItemBank] === this.state.filterBank){
                            arrayItemList.push(item);
                        }
                    }
                    else{
                        arrayItemList.push(item);
                    }
                })
            })
        }
        return arrayItemList.map(item => <AllCurrencyForm currency={item} />)
        // {this.props.allCurrency.currencies.usd && this.props.allCurrency.currencies.usd.map(item => <AllCurrencyForm currency={item} />)}
        // {this.props.allCurrency.currencies.eur && this.props.allCurrency.currencies.eur.map(item => <AllCurrencyForm currency={item} />)}
        // {this.props.allCurrency.currencies.rub && this.props.allCurrency.currencies.rub.map(item => <AllCurrencyForm currency={item} />)}
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
                        <Table striped bordered hover variant="dark" className={s.table}>
                            <thead>
                                <tr>

                                    {this.state.head.map((item, index) => this.createHeader(item, index))}
                                </tr>
                            </thead>

                            <tbody>
                               {this.createMainItem()}
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