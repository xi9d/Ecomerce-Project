import Cookie from 'js-cookie';
const GetCookie = (cookieName)=>{
    Cookie.get(cookieName);
};
export default GetCookie;