import './css/styles.css';
import { Entry } from './journal';

let entry = new Entry('', '');

document.getElementById("test-output").append(entry.title, entry.body);