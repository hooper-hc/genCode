// import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';
// import { connect } from 'react-redux';

// import actions from '../../actions';

// class EditConstellation extends Component {
//     constructor() {
//         super();
//     }

//     render() {
//         return (
//             <form onSubmit={this.props.editConstellation}>
//                 View/Edit Constellation
//                 <button type="submit">Submit</button>
//             </form>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     initialValues: state.constellations.constellation,
// });

// const mapDispatchToProps = {
//     editConstellation: actions.editConstellation.request,
// };

// EditConstellation = reduxForm({
//     form: 'editConstellation',
// })(EditConstellation);

// export default connect(mapStateToProps, mapDispatchToProps)(EditConstellation);
