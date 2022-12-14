// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { a } from 'react-router-dom';
import image_1 from './assets/images/1.jpg'
import image_2 from './assets/images/2.jpg'
import image_4 from './assets/images/4.jpg'
import logo2 from './assets/images/logo2.jpg'
import logo3 from './assets/images/logo3.jpg'
import logo4 from './assets/images/logo4.png'

const App = () => {
  console.log('dddd')
  const[isClose,setClose] = useState(true);
  
  const toggle = () => {
    setClose(!isClose)

  }
  return (
    <div className="App">
      <nav>
        <ul className="topnav">
          <li className="left">
            <img className='logo' src='./logo4.png' alt='logo'></img>
          </li>
          <li className='n'><a to="#contact">Contact</a></li> 
          <li className='n'><a to="#about">About</a></li>
          <li className='n'><a to="#news">Services</a></li>
          <li className='n'><a to="#home">Home</a></li>
          <li className="right">
            <button id="openbtn" onClick={() => toggle()}>&#9776;</button>
          </li>
        </ul>
        <div id="Sidenav" className={isClose ?'sidenav hidden':'sidenav'}>
          <a to={'/'} className="closebtn" onClick={() => toggle()}>&times;</a>
          <a to={'/'}>Homes</a>
          <a to={'/'}>About</a>
          <a to={'/'}>Services</a>
          <a to={'/'}>Contact</a>
        </div>
      </nav>
      <div className='flex dir-col minH-200 p-10'>
        <div className='w-100 minH-50 pt-50'>
          {/* <img src={image_1} alt='img1' />   */}
        </div>
        <div className='flex w-100 justify-content-center' id="twoimg">
          {/* <img className='img2' src={image_2} alt='img2' /> */}
          {/* <img className='img4' src={image_4} alt='img4' /> */}
        </div>
      </div>

      {/* ----------------------------------Content--------------------------------- */}
      <div>
        <h1 className='text-[20px] hover:text-[30px] font-bold underline'>Hello World</h1>
        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face"></img>
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
                Erin Lindford
              </p>
              <p class="text-slate-500 font-medium">
                Product Engineer
              </p>
            </div>
            <button class="px-4 py-1 bg-sky-500 hover:bg-sky-700 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
          </div>
        </div>
      </div>
      
      <div id="carouselExampleIndicators" class="carousel slide carousel" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={image_1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image_2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image_4} alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      {/* ----------------------------------Footer---------------------------------- */}

      <div id='footer' style={{ display: 'block', background: 'black', color: 'white' }}>
        <div className='w-100' >
          <div className='flex' id='footer1' style={{padding: '20px' , borderBottom: '3px solid rgb(17, 18, 26)', justifyContent: 'space-evenly'}}>
            <div  id='footer11'  className='w-100 flex dir-col justify-content-around'>
              <div className='flex' >
                <img style={{width: '40px',height: '40px',alignSelf: 'center'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAAXNSR0IB2cksfwAAAqBQTFRFAAAAIx8g/cgN/dIY/tUb7m49/togJSAg7Wk8/coQ7GM8/MYO8YQ+/t8l73Y9/uMq8H4+73k961s7/cwS9Zwz/MIQ7nE88ok/JyIg96kn9Jc485E+73I961M79JQ7+rUc/L8T840/LCUg9qMt9qAw+rkZ+K0k96cq+bMf+K8h+7wW/c8V/ukw/tAW8IE+9Zo26XM863Y9Oisj51U27JMme2Ac/uEn97sV96gnLyYh/+IkqYkW8ok+PTEf/+szTD4d+r8XpKKi6245/c0T7H89tV41mXkWgmYa7Hk+TDMm+8QO868j/8YIW0ke6U86/McMkI6O7Iw9vr2+oX8Y1KIW98kI+8UP+rEd/cQM8q8evIIn/+gwzJwV9J8w6m05/cQP27IW/uQrNjM0850z6Uo57nQ97Fs5+dATVUYc/MQR96Mr7F8872o6/9Ia/+w46rgR+rMaUjcnvmw3/94o8Ik++K8i75swZWJj9ZcyakcoPDg5lZOT4eHh7nA846sW55I1/tEX4H88Szse/eIr7+/v++Mp6k46WDsm13A6x5YYvocj/tkg//A3/vA22tnZ73U91oQ3qm4t/+ov6lI76Us5XFlZ7nE760o7/tUa+sAS6Ek7fkstYEse60g6b21tS0dI7mk8kWwe7oA/vpkV9ZM8uF416Ojo73w+mlYx//A3i4mKQDYf//A1z2s4dU4p85M68Hw9s3Ut7Fs77Fk56kg48oE7/+oxaj4q7G47//A2sK+vzHk5+Pj4/vA3//A4WldY+8kP35Qs7Wk8/csSyMfIc18cNyoj/80RfEct870P/90kjFgv6248/dMZ/tMa7Y4vxGk461o7p1oz6mI88489k3kaMi4vflcn6kk58488m2Mw/+kw7cMXdnN06Eo78Hg+diDHKAAAAOB0Uk5TAP///////////////////////////////////////////////////////////////f//Jwr/+P/r/xr/+f///2P/OPv/////IP/+LBb/hJb//////yGHuvf//yj/uhh3/73/kejpeEL/8NX6GDZg/5H//zqW1f//Zf////9T///7//+A/5DY/////9jI2P8////Y0Lj/aMjy0vj//1j//9H/iv/0///w/+j//4j//9e5/6CQYHV4//aY////6Pj/vP/i5////0z//3j/ZmjqK//2/4iP////8Hv/0P//mPh+Fx55AAADC0lEQVR4nJWW51vTUBSHb8oItKWyKSqrbhFoC1KglCEIspQlCqIIylIEEQXZMpTh3nvvvffee+/9r5jck7TNaHk8H3qfp33z5iQ595cixKu0uIXTlkR4R8ybOWdpGv9HXqUXbR87wm/0mJHeo4YNdw8ZfPb7LMvw1CnTPfw5uO+Q6MWTLNBFMomMg7tTeIBX9GXRPu5JJDw8BOPy4HPCEyx46OjIx8EulzuXTuDRcQlujhbtzi7qVxy6fFmQG2vv259hIInInq/n21m7i8Kz1byTbTaBjD2nU6UkSYIgSaVSe2YdY1d4XjP1E7bS1gbshbEqCmWLVD55mQX2oXYPwli8y94W7EmRZjAc0NgBdjuHjww9I9we7MkqQlBkSkcwtjvMDwV8uRPYk0Romk8Eu/QCpqPCnbD9oChN8TsTsV0K+q5BYI8l+WB2S3wT9aXynQbbXSfT+AaMB+mF8vgjt5pLqLVHg+2uK+gLHQd2oZwoae7ubqDbOa3Bdh+qm2rAZ4t13hSfvZlen2mw3ecSQtcB/6wUu8yG31/oJUUN9j8IrYrBeIawF7purDlBd6MG+1aEboP9pDj+qCWTXg6DfS5CdwAXpwkicw/9ORHs3xCKAdwCTdzdi3Gw70DoeIxVHIqxU82sBnuFpW5w9YKdek7FgD8WvZFMaZk7swmhU4DrreFXmftODU019P6LfaqG8cIDPzBPdTdCdczMMFRy2y7BVWjVCuPMoJ8wkXhoKnJ1ucLhOcZM5EZ6gK+APSFHadA/9/AX9lKrgd3kWma+m2T6mlSZR5tAruqFvSp9X8XZqzI6UgXyyEVMEkgvImaz2rM5I6sxkHw6Uc7Y2ah/weaMRJbEk9fe9GJzpswYY8VGex9n7rU/sgLYFNtnysioN6w9VVeY3AlHaBvXt/saM7I01CxT60wJrPPLz+/vLyi4X18fYkpgNTfhXwdazXfFFt774GmClbfH31bEr/JKsOuE9qNrBTSV8nmpos1EHwgTodH/vlepSs+r5PR+6FOVZRiX+X+CtwOwA9Y/l4XItnnpqF4AAAAASUVORK5CYII="></img>
                <div style={{marginLeft:'10px' ,lineHeight:'30px'}}>
                  <h1>Soleye</h1>
                </div>
              </div>
              <div className='flex' style={{justifyContent: 'flex-start'}}>
                <div style={{marginRight: '10px',alignSelf: 'center'}}>
                  <img className='w-[25px] h-[25px]' src='https://soleye.xyz/static/media/twitter.af511ef5e5aea3a4c6f856a3b8d7a0fc.svg'></img>
                </div>
                <div style={{marginRight: '10px',alignSelf: 'center'}}>
                  <img className='w-[25px] h-[25px]' src='https://soleye.xyz/static/media/discord.506e91fc3d0e546ef05984e1cd5511ea.svg'></img>
                </div>
              </div>
            </div>
            <div id='footer12' className='flex w-100 justify-content-around'>
              <div style={{padding: '10px', fontSize:'15px'}} className='flex dir-col'>
                <div style={{fontSize: '20px'}}>Features</div>
                <div >dashboard</div>
                <div >Soleye Analytics</div>
                <div >Roadmap</div>
              </div>
              <div style={{padding: '10px', fontSize:'15px'}} className='flex dir-col'>
                <div style={{fontSize: '20px'}}>Features</div>
                <div >dashboard</div>
                <div >Soleye Analytics</div>
                <div >Roadmap</div>
              </div>
              <div style={{padding: '10px', fontSize:'15px'}} className='flex dir-col'>
                <div style={{fontSize: '20px'}}>Features</div>
                <div >dashboard</div>
                <div >Soleye Analytics</div>
                <div >Roadmap</div>
              </div>
            </div>
          </div>
          <div className='flex' id='footer2' style={{textAlign: 'left' ,justifyContent: 'space-evenly', padding: '20px'}}>
            <div className='f21 w-100' style={{textAlign: 'center',fontSize: '13px'}} >
              Copyright @ 2022 | SolEye | Trade Smarter, Faster, Better
            </div>
            <div className='flex f22 w-100 justify-content-center'>
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>

      <div className={isClose ? 'hover-drop hidden' : 'hover-drop'}  onClick={() => toggle()}></div>
    </div>
  );
}


export default App;
