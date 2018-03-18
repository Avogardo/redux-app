import { push } from 'react-router-redux';


const goToAbout = () => push('/about-us');
const goHome = () => push('/');

export {
    goToAbout,
    goHome,
};
