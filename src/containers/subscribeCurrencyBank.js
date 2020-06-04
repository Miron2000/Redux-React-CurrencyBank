import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import '../components/SubscribeCurrencyBank/subscribeCurrencyBank.css';
import { getSubscribeCurrencyBank } from '../store/actions/postListActions';
import SubscribeCurrencyBankForm from '../components/SubscribeCurrencyBank/subscribeCurrencyBankForm';
import LanguageContext from '../LanguageContext/LanguageContext';


class subscribeCurrencyBank extends React.Component {

    state = {
        language: this.context
    }
    static contextType = LanguageContext;

    languageChange = (event) => {
        this.setState({
            language: event.target.checked ? 'en' : 'ru'
        })
    }

    componentDidMount() {
        this.props.getSubscribeCurrencyBank();
    }

    //отрисовка(с обьекта достаю item)
    createMainItemSubscribe = () => {

        const subscribeCurBank = this.props.subscribeCurrencyBank.subscribeCurBank;
        return Object.keys(subscribeCurBank).map(index => {
            return <SubscribeCurrencyBankForm subscribe={subscribeCurBank[index]} language={this.state.language} />
        })
    }


    render() {

        return (
            <>
                <LanguageContext.Provider value={this.state.language}>
                    <div className="flex">
                        <h5 className="textSwitch">Ru</h5>
                        <Form.Check onChange={this.languageChange}
                            type="switch"
                            id="custom-switch"
                            label=""
                        />
                        <h5 className="textSwitch">En</h5>
                    </div>
                    {this.createMainItemSubscribe()}
                </LanguageContext.Provider>
            </>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        subscribeCurrencyBank: state.subscribeCurrencyBank
    }
};
const mapDispatchToProps = {
    getSubscribeCurrencyBank
};
export default connect(mapStateToProps, mapDispatchToProps)(subscribeCurrencyBank);
