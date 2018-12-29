import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import EditReality from './EditReality';

import actions from '../../actions';

class ViewRealities extends Component {
    constructor() {
        super();

        this.state = {
            editing: false,
        };

        this.toggleEditReality = this.toggleEditReality.bind(this);
    }

    componentWillMount() {
        this.props.fetchAllRealities();
    }

    toggleEditReality(reality) {
        this.props.selectReality(reality);
        this.setState({
            editing: !this.state.editing,
        });
    }

    render() {
        const component = this;
        return (
            <section>
                <header>
                    <h3>Realities</h3>
                </header>
                {!this.state.editing &&
                    <table className="realityTable">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>raw text</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {_.map(this.props.realities, reality => (
                                <tr>
                                    <td>{reality._id}</td>
                                    <td>{JSON.stringify(reality).replace(/,/g,'\n')}</td>
                                    <td>
                                        <button onClick={() => component.toggleEditReality(reality._id)}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td />
                                <td />
                                <td>
                                        <button onClick={() => component.toggleEditReality(null)}>Create new</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                }
                {this.state.editing &&
                    <EditReality
                        close={this.toggleEditReality}
                    />
                }
            </section>
        );
    }
}

const mapStateToProps = state => ({
    realities: state.universe.items.byId,
});

const mapDispatchToProps = {
    fetchAllRealities: actions.fetchAllRealities.request,
    selectReality: actions.selectReality,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewRealities);
