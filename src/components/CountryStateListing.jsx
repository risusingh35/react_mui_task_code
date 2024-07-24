import { Container, List, ListItemButton, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
const CountryStateListing = () => {

    const countryData = {
        India: ['Gujarat', 'Bihar', 'Goa', 'Uttar Pradesh', 'Madhya Pradesh'],
        'United State': ['California',
            'Texas',
            'New York',
            'Florida',
            'Illinois'],
        Germany: ['Bavaria',
            'Berlin',
            'Hamburg',
            'Saxony',
            'North Rhine-Westphalia'],
        Canada: ['Ontario',
            'Quebec',
            'British Columbia',
            'Alberta',
            'Manitoba']
    }
    const [selectedCountry, setSelectedCountry] = useState('India')



    return (
        <Container>
            <list>
                {
                    Object.keys(countryData).map((country) => {
                        return (<ListItemButton
                            button
                            key={country}
                            selected={selectedCountry === country}
                            onClick={() => setSelectedCountry(country)}
                        >
                            <ListItemText primary={country} />
                        </ListItemButton>)
                    })
                }
            </list>
            <Typography>
                State of {selectedCountry}
            </Typography>
            <List>
                {
                    countryData[selectedCountry].map((state, i) => (
                        <ListItem key={i}>
                            <ListItemText primary={state}/>
                        </ListItem>
                    ))
                }
            </List>
        </Container>
    )
}
export default CountryStateListing