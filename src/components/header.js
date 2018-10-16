import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                  <span className="navbar-text">
                  Music Memory Game
                </span>

                <button className="btn btn-info btn-sm my-2 my-sm-0" onClick={() => this.props.restart()} disabled={this.props.round === 0}>
                    <i className="fas fa-redo-alt"></i> Restart
                </button>
            </nav>

        )
    }
};

export default Header
