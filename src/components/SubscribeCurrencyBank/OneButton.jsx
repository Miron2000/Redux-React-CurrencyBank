import React from 'react';
import {Button} from 'react-bootstrap';
import LanguageContext from '../../LanguageContext/LanguageContext';
import { connect } from 'react-redux';
import {createPost} from '../../store/actions/postListActions';

const translationsText = {
    textSubscribe:{
        en:'Subscribe',
        ru:'Подписаться'  
    },
    textUnsubscribe:{
        en:'Unsubscribe',
        ru:'Отписаться'
    }
} 

class OneButton extends React.Component{
  

    state={
        subscribe: 'sub',
        buttonColor: 'success',
        //меняем текст
        text:translationsText.textSubscribe.ru,
       
        //Для подписки
         currency_id:this.props.currency.currency_id
    }

    subscribeHandleClick = (event) => {
        console.log(this.state.subscribe)
        console.log(this.state.currency_id)
       
        this.setState({
            subscribe:this.state.subscribe === 'sub' ? 'unsub' : 'sub',
            //для подписки
            // currency_id:event.target.click ? this.props.currency.currency_id : null
            // currency_id: this.state.currency_id === null ? this.props.currency.currency_id : null
        })
        if (this.state.subscribe === 'sub'){
            this.setState({
               buttonColor: 'danger',
               currency_id:this.props.currency.currency_id,
               
                //меняем текст
               text:translationsText.textUnsubscribe.ru
                
            })
        }
        else if(this.state.subscribe === 'unsub'){
            this.setState({
                buttonColor: 'success',
                currency_id:this.props.currency.currency_id,
                
                //меняем текст
                text:translationsText.textSubscribe.ru
                
            })
        }
        //вызываю эту функцию с actions для подписки (POST)
      this.props.createPost(this.state.currency_id,this.state.subscribe) 
    
        
    }
    
   
      


    render(){
        const translations = {
            currencyText:{
              en: this.props.currency.currency_name_en,
              ru: this.props.currency.currency_name_ru
            },
            textSubscribe:{
                en:'Subscribe',
                ru:'Подписаться'  
            },
            textUnsubscribe:{
                en:'Unsubscribe',
                ru:'Отписаться'
            }
        }
      
        
        return(
                <>
                 <LanguageContext.Consumer>
                 
                 {/* Для метода пост */}
                 {/* onClick={() => this.props.createPost(this.state)} */}
                 {/* ${translations.textSubscribe[value]} */}
               {(value) => <Button onClick={this.subscribeHandleClick} variant={this.state.buttonColor}>{`${translations.currencyText[value]} ${this.state.text} `}</Button>} 
               {/* Доллар подписаться и отписаться флажок сделать который делает отписаться  */}
                </LanguageContext.Consumer>
                
                </>
        )
    }
}

export default connect(null, {createPost})(OneButton);
    // export default OneButton;