import { styled } from "@mui/material";

export const WeatherApiWrapper = styled('div') <any>`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    && .box-style{
        width: 700px;
        height: 800px;
        background-color: #ffffff;
        border: 3px solid rebeccapurple;
        border-radius: 12px;
        background-image: url('http://wallpapercave.com/wp/iLGGg3e.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    && .container{
        min-width: 400px;
        min-height: 400px;
        padding: 20px;
        background: #ffffff;
        border-radius: 12px;
    }

    && .weather-details-box{
        height: 100px;
        width:400px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: wheat;
    }

    && .searched-city{
        font-family:Georgia, 'Times New Roman', Times, serif;
        font-style: italic;
        font-size: 16px;
        color: balck;
    }
 `

export const TextFieldWrapper = styled('div') <any>`

width: 100%;
background-color: #ffffff;

&& .MuiFormLabel-root{
    color:black
}

&& fieldset{
    border-color:black;
    border-radius: 12px;
}
&& :hover fieldset{
    border-color:black;
}
&& .Mui-focused fieldset{
    border-color:green;
}
`