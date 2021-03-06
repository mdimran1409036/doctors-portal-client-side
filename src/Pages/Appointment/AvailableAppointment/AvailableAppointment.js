import { Alert, Container, Grid, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 122,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        price: 322,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
        price: 222,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price: 444,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        price: 231,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        price: 131,
    },
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setBookingSuccess(false);
    };
    
    return (
        <Container>
            <h2>Available Appointments in {date.toDateString()}</h2>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                TransitionComponent="Fade"
                open={bookingSuccess}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Appointment is placed successfully
                </Alert>
            </Snackbar>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                {bookings.map((booking, index) => (
                    <Grid item xs={6} sm={6} md={4} key={index}>
                        <Booking
                            date={date}
                            booking={booking}
                            key={booking.id}
                            setBookingSuccess={setBookingSuccess}
                        >
                        </Booking>
                    </Grid>

                ))}

            </Grid>
        </Container>
    );
};

export default AvailableAppointment;