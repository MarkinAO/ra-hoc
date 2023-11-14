import { useState } from 'react';
import SelectTask from './components/selectTask/SelectTask';
import './App.css';
import Time from './components/time/Time';
import Highlight from './components/highlight/Highlight';
// import Aggregation from './components/aggregation/Aggregation';


function App() {
  let [ curTask, setCurTask ] = useState('AGGREGATION');
  const tasks = [
    { taskName: 'TIME', solving: <Time key={'TIME'} /> },
    { taskName: 'HIGHLIGHT', solving: <Highlight key={'HIGHLIGHT'} /> },
    // { taskName: 'AGGREGATION', solving: <Aggregation key={'AGGREGATION'} /> }
  ];

  return (
    <>
      <SelectTask tasks={tasks} setTask={(task: string) => setCurTask(curTask = task)} curTask={curTask} />      
      <div>        
        { tasks.filter(task => task.taskName === curTask).map(task => task.solving) }
      </div>
    </>
  )
}

export default App;
