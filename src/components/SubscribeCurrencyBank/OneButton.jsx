import React from 'react';
import { Button } from 'react-bootstrap';
import LanguageContext from '../../LanguageContext/LanguageContext';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postListActions';
import './subscribeCurrencyBank.css';

// const translationsText = {
//     textSubscribe: {
//         en: 'Subscribe',
//         ru: 'Подписаться'
//     },
//     textUnsubscribe: {
//         en: 'Unsubscribe',
//         ru: 'Отписаться'
//     }
// }


class OneButton extends React.Component {


    state = {
        //  subscribe: 'sub',
        subscribe: this.props.currency.subscribe,

        //Для подписки
        currency_id: this.props.currency.currency_id
    }

    subscribeHandleClick = () => {

        this.setState({

            subscribe: this.state.subscribe === 'sub' ? 'unsub' : 'sub',
        })

        if (this.state.subscribe === 'sub') {

            this.setState({
                currency_id: this.props.currency.currency_id,
            },
                () => console.log(this.props.currency.subscribe, 'MIRON')
            )
        }
        else if (this.state.subscribe === 'unsub') {

            this.setState({
                currency_id: this.props.currency.currency_id,
            },
                () => console.log(this.props.currency.subscribe, 'MIRON'))
        }

        //вызываю эту функцию с actions для подписки (POST)
        this.props.createPost(this.state.currency_id, this.state.subscribe)

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
        let textSubscribe = this.state.subscribe === 'sub' ? translations.textUnsubscribe.ru : translations.textSubscribe.ru;


        return (
            <>
                <LanguageContext.Consumer>

                    {/* ${translations.textSubscribe[value]} */}
                    {(value) => <Button className="button_sub" onClick={this.subscribeHandleClick} variant={buttonColor}>{`${translations.currencyText[value]} ${textSubscribe} `}</Button>}

                </LanguageContext.Consumer>

            </>
        )
    }
}

export default connect(null, { createPost })(OneButton);
