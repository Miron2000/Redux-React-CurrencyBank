import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import LanguageContext from '../../LanguageContext/LanguageContext';
import './subscribeCurrencyBank.css'


function SubscribeCurrencyBankForm({ subscribe }) {

    const translations = {
        bankText: {
            en: subscribe.bank_name_en,
            ru: subscribe.bank_name_ru
        }
    }

    
    return (
    <div>
        <Accordion defaultActiveKey="1" className="accordion">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <LanguageContext.Consumer>
      {(value) => translations.bankText[value]}
      </LanguageContext.Consumer>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Вот тут компонента будет Button (3 кнопки USD, EUR, RUB)</Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
     
    </div>
    )

}
export default SubscribeCurrencyBankForm;