import React from 'react';
import { Button } from 'react-bootstrap';
import LanguageContext from '../../LanguageContext/LanguageContext';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postListActions';
import './subscribeCurrencyBank.css';
import Img from "../../img/checkMarket.png";
import Img2 from "../../img/cross.png";



// const changeState = () => {
//     return new Promise(((resolve, reject) => {
//         this.setState({
//             subscribe: this.state.subscribe === 'sub' ? 'unsub' : 'sub',
//         })
//         resolve(this.state.subscribe)
//     }))
// }
// changeState().then((res) => {
//     console.table(res)
//     //вызываю эту функцию с actions для подписки (POST)
//     this.props.createPost(this.state.currency_id, this.state.subscribe)
// });

class OneButton extends React.Component {
    state = {
        subscribe: this.props.currency.subscribe,
        //Для подписки
        currency_id: this.props.currency.currency_id
    }
    subscribeHandleClick = () => {
        this.setState(
            { subscribe: this.state.subscribe === 'sub' ? 'unsub' : 'sub' },
            //вызываю эту функцию с actions для подписки (POST)
            () => (this.props.createPost(this.state.currency_id, this.state.subscribe))
        )

    }
    render() {
        let buttonColor = this.state.subscribe === 'sub' ? 'danger' : 'success';
        const translations = {
            currencyText: {
                en: this.props.currency.currency_name_en,
                ru: this.props.currency.currency_name_ru
            },
            textSubscribe: {
                en: 'Subscribe',
                ru: 'Подписаться'
            },
            textUnsubscribe: {
                en: 'Unsubscribe',
                ru: 'Отписаться'
            }
        }

        let textSubscribe = this.state.subscribe === 'sub' ? translations.textUnsubscribe[this.props.language] : translations.textSubscribe[this.props.language];
        let img = <img className="imgButton" src={this.state.subscribe === 'sub' ? Img : Img2} />
        return (
            <>
                <LanguageContext.Consumer>
                    {/* ${translations.textSubscribe[value]} */}
                    {(value) => <Button className="button_sub" onClick={this.subscribeHandleClick} variant={buttonColor}>{`${translations.currencyText[value]}  ${textSubscribe}`} {img}</Button>}
                </LanguageContext.Consumer>
            </>
        )
    }
}

export default connect(null, { createPost })(OneButton);
