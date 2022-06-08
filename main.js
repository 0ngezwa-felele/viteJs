import './style.css'
import Alpine from 'alpinejs'
import {LoveCounter} from './love-counter';
import persist from '@alpinejs/persist'
import Quotes from './quotes';
import './quotes.css'

// import * as fun from 'everyday-fun';
 
window.Alpine = Alpine
Alpine.plugin(persist)
Alpine.data('quoteApp', Quotes)

 
Alpine.data('loveCounter', LoveCounter);
Alpine.start()


