import React from 'react';
import '../Css/userSelection.css'


class UserSelection extends React.Component {
    user_selection(arg) {
        this.props.sendData(arg);
    };
    render() {
        return (

            <div class="user_selection_container">
                <p>Make your choice: </p>
                <section className="button_container">
                    {this.props.choices.map(choice => (
                        <button onClick={(e) => this.user_selection(choice.name)}><img height="25px" alt={choice.alt} src={choice.imageUrl} /></button>))}
                </section>
            </div>

        );
    }
}

export default UserSelection;