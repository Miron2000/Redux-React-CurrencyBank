import React from 'react';
import OneButton from './OneButton';



function ButtonForm ({ subscribe }) {

   
        
        return(
            <div>
                 {subscribe.currencies.map(item =>  <OneButton currency={item} /> )}
            </div>
        )
    }


    // export default connect(null, {createPost})(ButtonForm);
export default ButtonForm;