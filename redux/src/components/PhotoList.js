import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';
import { Button } from 'semantic-ui-react';
import './photolist.scss';
import 'semantic-ui-css/semantic.min.css';
import './photo.scss';

import Photo from './Photo';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PhotoList = props => {
    console.log(props)
    return (
        <div className="container">
            <div className="navbar">
                <h1>Unsplash - Get some Inspiration!</h1>
                <Button onClick={props.getData}>
                    {props.isLoading ? (
                        <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
                    ) : (
                            'Find New Photos'
                        )}
                </Button>
            </div>
            <div className="cards">
            {props.photos &&
                    props.photos.map(photo => <Photo key={photo.author} photo={photo} />)}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        photos: state.photos
    };
};
export default connect(
    mapStateToProps,
    { getData }
)(PhotoList);

