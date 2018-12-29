import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import actions from '../../actions';

var EditReality = props => (
    <form className="editReality"
        onSubmit={props.handleSubmit(data => props.initialValues._id ?
            props.editReality({ id: data._id, data }) :
            props.createReality({ data })
        )}
    >
        <h3>Create/Edit Reality</h3>
        <div>
            <header>
                <h4>Reality type</h4>
            </header>
            <label>Perceptive
                <Field
                    component="input"
                    type="checkbox"
                    name="typeP"
                    id="typeP"
                />
            </label>
            <label>Linguistic
                <Field
                    component="input"
                    type="checkbox"
                    name="typeL"
                    id="typeL"
                />
            </label>
            <label>Temporal
                <Field
                    component="input"
                    type="checkbox"
                    name="typeT"
                    id="typeT"
                />
            </label>
        </div>
        <div>
            <header>
                <h4>Node type</h4>
            </header>
            <label>Person
                <Field
                    component="input"
                    type="radio"
                    name="nodeType"
                    id="nodeTypeP"
                    value="P"
                />
            </label>
            <label>Event
                <Field
                    component="input"
                    type="radio"
                    name="nodeType"
                    id="nodeTypeE"
                    value="E"
                />
            </label>
            <label>Collective
                <Field
                    component="input"
                    type="radio"
                    name="nodeType"
                    id="nodeTypeC"
                    value="C"
                />
            </label>
            <label>Thing
                <Field
                    component="input"
                    type="radio"
                    name="nodeType"
                    id="nodeTypeT"
                    value="T"
                />
            </label>
            <label>Moment
                <Field
                    component="input"
                    type="radio"
                    name="nodeType"
                    id="nodeTypeM"
                    value="M"
                />
            </label>
            <label>Idea
                <Field
                    component="input"
                    type="radio"
                    name="nodeType"
                    id="nodeTypeI"
                    value="I"
                />
            </label>
        </div>
        <label>Name
            <Field
                component="input"
                type="text"
                name="name"
                id="name"
            />
        </label>
        <label>Language
            <Field
                component="input"
                type="text"
                name="language"
                id="language"
            />
        </label>
        <label>Temporal details
            <Field
                component="input"
                type="text"
                name="temporal"
                id="temporal"
            />
        </label>
        <label>Geotags
            <Field
                component="input"
                type="text"
                name="geotags"
                id="geotags"
            />
        </label>
        <label>Image URL
            <Field
                component="input"
                type="text"
                name="image"
                id="image"
            />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={props.close}>Cancel</button>
    </form>
);

const mapStateToProps = state => ({
    initialValues: state.universe.reality,
});

const mapDispatchToProps = {
    editReality: actions.editReality.request,
    createReality: actions.createReality.request,
};

EditReality = reduxForm({
    form: 'editReality',
    enableReinitialize: true,
})(EditReality);

export default connect(mapStateToProps, mapDispatchToProps)(EditReality);
