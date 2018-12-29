// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import _ from 'lodash';

// import actions from '../../actions';
// console.log('It works', actions);

// class ViewConstellations extends Component {
//     constructor() {
//         super();
//     }

//     componentWillMount() {
//         this.props.fetchAllConstellations();
//     }

//     render() {
//         const component = this;
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {_.map(this.props.constellations, constellation => (
//                         <tr>
//                             <td>{constellation._id}</td>
//                             <td>
//                                 <Link to="/admin/constellations/edit/" onClick={() => component.props.fetchConstellation({ id: constellation._id })}>Edit</Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     constellations: state.constellations.items.byId,
//     editConstellation: state.constellations.constellation,
// });

// const mapDispatchToProps = {
//     fetchAllConstellations: actions.fetchAllConstellations.request,
//     fetchConstellation: actions.fetchSingleConstellation.request,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ViewConstellations);
