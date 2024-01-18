import './index.scss';
import { a } from './components/test';

document.querySelector('#root').innerHTML = `
<div class="content">
  <h1>Vanilla</h1>
  <p>Start building amazing things with Rsbuild.</p>
</div>
`;
a();
