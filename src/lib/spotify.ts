//spotifiy endpoints
import queryString from 'query-string';

export const auth_route = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const client_id = "b0f71a8a0a8c4efd808b05edb9074ef3";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

export const parsed_token = () => queryString.parse(window.location.hash);

export const loginURL = `${auth_route}?client_id=${client_id}&scope=${encodeURIComponent(scopes.join(" "))}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;

