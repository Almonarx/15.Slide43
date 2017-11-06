import builder from '../elementBuilder';
import './footer.scss';

export default () => {
    const content = '<p>Easycode 2017 (c)<a href="/">Home</a></p>';

    return builder('footer', content, 'footer');
};