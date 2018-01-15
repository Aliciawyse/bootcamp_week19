import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Section = () => (
    <Card>

        <CardMedia
            overlay={<CardTitle title="Click on an image to begin." subtitle="Overlay subtitle" />}
        >
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/01NL1BZUS0.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Click an image to begin." subtitle="Card subtitle" />
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
    </Card>
);

export default Section;