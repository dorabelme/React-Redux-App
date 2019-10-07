import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './photo.scss';

const Photo = props => {
    console.log(props)
    return (
        <Card>
            <Card.Content>
                <Card.Header className="header">{props.photo.author}</Card.Header>
                <Image src={props.photo.download_url} alt={props.photo.author} />
            </Card.Content>
            <Card.Content extra>
                <div><Icon name='download' />
                    Download</div>
                    <a href={props.photo.download_url}>{props.photo.download_url}</a>
            </Card.Content>
        </Card>
    );
};

export default Photo;
