import axios from 'axios';
console.log(process.env.REACT_APP_YT_API_KEY, "here");
const request = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: 'AIzaSyBNg-iP4zVaSfzxereUHi1yCzik6OtPd1A',
  },
});

export default request;
