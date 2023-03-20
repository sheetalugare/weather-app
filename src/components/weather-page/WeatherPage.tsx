import { TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { TextFieldWrapper, WeatherApiWrapper } from "./WeatherPage.module"
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";


const WeatherPage = () => {

    const [searchedCity, setSearchedCity] = useState('');
    const [fetchedDetails, setFetchedDetails] = useState<any>(null);
    const [isError, setIsError] = useState(false);

    const apiKey = 'f56f24967aaf51182d1d4df628297c6d'

    const getWetherDetails = (cityName: any) => {
        if (!cityName) return
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
        axios.get(apiURL).then((res) => {
            setFetchedDetails(res.data)
            setIsError(false)
        }).catch((err) => {
            setIsError(true)
        })
    }

    return (
        <WeatherApiWrapper>
            <Box className={'box-style'} >
                <Stack rowGap={3} justifyContent={'center'} className='container' alignItems={'center'} >
                    <Stack sx={{ color: "blue", fontWeight: 600, fontSize: '28px' }} >Weather App</Stack>
                    <Stack rowGap={3}>
                        <TextFieldWrapper >
                            <TextField
                                label={'Enter Your City Name'}
                                type={'search'}
                                value={searchedCity}
                                onChange={(event: any) => setSearchedCity(event.target.value)}
                            />
                        </TextFieldWrapper>
                        <Stack sx={{ maxWidth: "100px", margin: "auto" }} >
                            <Button variant={'contained'} onClick={() => getWetherDetails(searchedCity)} >Search</Button>
                        </Stack>
                    </Stack>
                    {!isError ?
                        fetchedDetails !== null &&
                        < Stack className='weather-details-box' >
                            <Stack className="searched-city" >CityName : {fetchedDetails?.name}, {fetchedDetails?.sys?.country === 'IN' ? 'India' : ''}</Stack>
                            <Stack className="searched-city" >Temperature in celcius : {(fetchedDetails?.main?.temp - 273.15).toFixed(2)}  </Stack>
                            <Stack className="searched-city" >wind Speed : {fetchedDetails?.wind?.speed}</Stack>
                        </Stack>
                        :
                        <Stack sx={{ color: "red", fontSize: "16px" }} >Check your entered city spelling.....</Stack>
                    }
                </Stack>
            </Box>
        </WeatherApiWrapper >
    )
}

export default WeatherPage;