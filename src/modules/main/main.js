import builder from '../elementBuilder';
import './main.scss';

export default () => {
    const date = new Date();

    let li = '';
    for (let i = 1; i <= 20; i++) {
        li += `<li>${i}</li>`;
    }

    const content = `<h2>Current date:</h2><p><strong>${date.toLocaleString()}</strong></p><ul>${li}</ul>`;

    return builder('main', content, 'main');
};