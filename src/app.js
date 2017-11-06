import $ from 'jquery';
import header from './modules/header/header.js';
import footer from './modules/footer/footer.js';
import main from './modules/main/main.js';

$('body').append(header(), main(), footer());