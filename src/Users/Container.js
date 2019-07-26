import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from './reducer';
import { createFetchUsers } from './actions';

class UsersContainer extends PureComponent {
  fetchUsers = () => {
    this.props.dispatch(createFetchUsers());
  }

  render() {
    return (
      <div>
        <button
          onClick={this.fetchUsers}
        >
        Fetch
        </button>
        <ul>
          {this.props.users.data.map(user => {
            return <li key={user.email}> {user.gender} - {user.name.first}</li>
          })}
        </ul>
      </div>
    );
  }
}

UsersContainer.propTypes = {
  users: PropTypes.object,
}

function mapStateToProps(state, props) {
  return {
    users: getUsers(state),
  };
}

const mapDispatchToProps = {
  dispatch: action => action,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersContainer);
