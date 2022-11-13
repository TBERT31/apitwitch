import axios from "axios";

let api = axios.create({
    header: {
        'Client-ID' : '0b7ng913f58q5jfea0dk5w4ynlenzr',
        'Authorization': 'Bearer g889is4e0akox499bshbnwu8gspczb' 
    }
})


/*
     Client_ID = 0b7ng913f58q5jfea0dk5w4ynlenzr
    REDIRECT = 'http://127.0.0.1/';

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=<your client id goes here>&redirect_uri=http://localhost:3000&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671
    LIEN REMPLI = https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=0b7ng913f58q5jfea0dk5w4ynlenzr&redirect_uri=http://localhost:3000&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671

*/

export default api;
