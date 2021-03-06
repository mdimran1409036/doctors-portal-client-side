import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = ({service}) => {
    return (
        <Card sx={{ border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                style={{width: 'auto', height: "80px", margin: "0 auto" }}
                image={service.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {service.description}
                </Typography>
            </CardContent>
            
        </Card>
    );
};

export default Service;