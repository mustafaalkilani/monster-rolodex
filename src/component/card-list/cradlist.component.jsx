import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({monstoers}) =>(
    <div className="card-list">
    {
        monstoers.map(monster => {
            return (
                <Card monster={monster} key={monster.id}/>
            )
        })
    }
    </div>
    );

export default CardList;