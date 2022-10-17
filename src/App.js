//import logo from './logo.svg';
import './App.css';
import Card from './Cards';
import Api from './Api';
function film(val){
  return(
<Card
imgsrc={val.imgsrc}
sname={val.sname}
link={val.link}
/>
  )
}
function App() {
  return (
  <>
<h1 className='heading'> Best hindi movies and series </h1>
{Api.map(film)}

<h3 className='footer'>© 2022 moviesAndseries </h3>
</>
  );
}

export default App;
