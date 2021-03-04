import React,{  useState} from 'react';
import './App.css';
import worried from './assets/worried.png'
import worried_big from './assets/worried_big.png'
import bad from './assets/sad.png'
import bad_big from './assets/sad_big.png'
import ambitious from './assets/ambitious.png'
import ambitious_big from './assets/ambitious_big.png'
import smile from './assets/smile.png'
import smile_big from './assets/smile_big.png'
import surprised from './assets/surprised.png'
import surprised_big from './assets/surprised_big.png'



export default function App() {
  const [active, setActive] = useState(3);
  const data = [
    {
      name: "Worried",
      value: 0,
      src:
        worried,
      bigSrc:
      worried_big
    },
    {
      name: "Bad",
      value: 1,
      src:
        bad,
      bigSrc:
        bad_big
    },
    {
      name: "Strong",
      value: 2,
      src:
        ambitious,
      bigSrc:
        ambitious_big
    },
    {
      name: "Good",
      value: 3,
      src:
        smile,
      bigSrc:
       smile_big
    },
    {
      name: "Suprised",
      value: 4,
      src:
        surprised,
      bigSrc:
      surprised_big
    }
  ];

  return (
  <div className="col-4 mx-auto " style={{marginTop:'15%'}}>
    <div className=" container-fluid position-relative m-3">
      <p className="text-center" style={{fontSize:'25px'}}>How Was the help you received?</p>
      <div className="position-absolute p-3 w-100">
        <hr
          className="w-75 mx-auto"
          style={{marginTop: "9%" , border: "2px solid grey"}}
        />
      </div>
      <div className="  position-absolute row no-gutters d-flex justify-content-evenly p-3">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={item.value === active ? "col-3" : "col-2 py-3 h-50"}
            >
              <img 
                className={
                  item.value === active
                    ? "disableSelection rounded-circle img-fluid"
                    : "disableSelection rounded-circle img-fluid"
                }
                src={item.value !== active ? item.src : item.bigSrc}
              />
              <p
                className={
                  item.value === active
                    ? "w-100 fw-bold text-center"
                    : "w-100 text-center text-muted"
                }
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="position-fixed w-100 p-3">
        <input
          type="range"
          min={0}
          max={4}
          value={active}
          onChange={e => setActive(parseInt(e.target.value))}
          className="slider mx-auto"
        />
      </div>
    </div>
    </div>
  );
}