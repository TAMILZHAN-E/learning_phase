import './App.css';
import Counter from './Counter'
import Component from './Component';
import './Counter.css';
import Dynamic from './Dynamic';
import statevsprops from './statevsprops';
import './statevsprops.css';
function App(){
  const obj={
    name:'tamil',
    roll:110,
    dept:'IT'
  }
  const arr=[1,2,3];
  const arrobj=
    [{id:1,name:'tamil'},{id:2,name:'zhan'}]
  return (
    <div>
      <statevsprops/>
      changes to test github.
    </div>
  );
 }

 export default App;