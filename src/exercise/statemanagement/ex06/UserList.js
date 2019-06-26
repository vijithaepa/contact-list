import React, { Component } from 'react'
import PropTypes from "prop-types";

class UserList extends Component {

    state = {
        showGames: true
    }

    handleShowHide = () => {
        console.log('clicked')
        this.setState((prevState) => (
            {showGames: !prevState.showGames}
        ))
    }

    render() {
        return (
            <div>
                <button className='show-hide' onClick={() => this.handleShowHide()}>
                    {this.state.showGames ? 'Hide' : 'Show'} the Number of Games Played
                </button>

                <ol>
                    {this.props.userList.map(user => (
                        <li key={user.userName}>

                            <ListItem user={user} showGames={this.state.showGames}/>
                        </li>
                    ))
                    }
                </ol>
            </div>
        )
    }
}

UserList.propTypes = {
    userList: PropTypes.array.isRequired,
};

export default UserList


const ListItem = (props) => (
    <span>{`${props.user.userName} played ${props.showGames ? props.user.npoOfGamePlayed : '*'} games.`}</span>
)
