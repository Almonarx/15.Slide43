import builder from '../elementBuilder';
import './header.scss';

export default () => {
    const content = '<a href="/">Logo</a><p>WOW</p>';

    return builder('header', content, 'header');
};