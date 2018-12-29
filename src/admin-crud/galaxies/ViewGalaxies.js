// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import _ from 'lodash';

// import actions from '../../actions';

// class ViewGalaxies extends Component {
//     constructor() {
//         super();
//     }

//     componentWillMount() {
//         this.props.fetchAllGalaxies();
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
//                     {_.map(this.props.galaxies, galaxy => (
//                         <tr>
//                             <td>{galaxy._id}</td>
//                             <td>
//                                 <Link to="/admin/galaxies/edit" onClick={() => component.props.fetchGalaxy(galaxy._id)}>Edit</Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     galaxies: state.galaxies.items.byId,
//     editGalaxy: state.galaxies.galaxy,
// });

// const mapDispatchToProps = {
//     fetchAllGalaxies: actions.fetchAllGalaxies.request,
//     fetchGalaxy: actions.fetchSingleGalaxy.request,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ViewGalaxies);
