import React from 'react';


class UserSelection extends React.Component {
    user_selection(arg) {
        this.props.sendData(arg);
    };
    render() {
        return (
            <section className="button_container">
                {this.props.choices.map(choice => (
                    <button onClick={(e) => this.user_selection(choice.name)}><img height="25px" alt={choice.alt} src={choice.imageUrl} /></button>))}
            </section>

        );
    }
}

export default UserSelection;