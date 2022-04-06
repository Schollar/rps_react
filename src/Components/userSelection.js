import React from 'react';


class UserSelection extends React.Component {
    user_selection(arg) {
        this.props.sendData(arg);
        this.props.compTurn();
    };
    render() {
        return (
            <section className="button_container">
                {this.props.choices.map(choice => (
                    <button onClick={(e) => this.user_selection(e.target.innerText)}>{choice}</button>))}
            </section>

        );
    }
}

export default UserSelection;