import { useState, useEffect } from "react";

export const LocationApp = () => {
    const [location, setLocation] = useState({});

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(handlePositionReceived);
        return () => navigator.geolocation.clearWatch(watchId); // clear the watch - UnMounting
    }, []);


    const handlePositionReceived = ({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
    }

    return (
        <>

            Latitude: {location.latitude} <br />
            Longitude: {location.longitude} <br />
        </>
    );
}