import { Component } from 'react';

import Card from '../card/card.component'
import './card-list.styles.css'

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    // // cast monster as a variable
                    // const { name, email, id, phone} = monster;
                    
                    return (
                        <Card monster={monster} />
                    );
                })}
</div>
        );
     }
}

export default CardList;