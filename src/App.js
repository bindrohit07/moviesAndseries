//import logo from './logo.svg';
import './App.css';
import Card from './Cards';
import Api from './Api';
function App() {
  return (
  <>
<h1 className='heading'> Best hindi movies and series </h1>
<Card
imgsrc={Api[0].imgsrc}
sname={Api[0].sname}
link={Api[0].link}
/>
<Card
imgsrc={Api[1].imgsrc}
sname={Api[1].sname}
link={Api[1].link}
/>
<Card
imgsrc={Api[2].imgsrc}
sname={Api[2].sname}
link={Api[2].link}
/>
<Card
imgsrc={Api[3].imgsrc}
sname={Api[3].sname}
link={Api[3].link}
/>
<Card
imgsrc={Api[4].imgsrc}
sname={Api[4].sname}
link={Api[4].link}
/>
<Card
imgsrc={Api[5].imgsrc}
sname={Api[5].sname}
link={Api[5].link}
/>
<Card
imgsrc={Api[6].imgsrc}
sname={Api[6].sname}
link={Api[6].link}
/>
<Card
imgsrc={Api[7].imgsrc}
sname={Api[7].sname}
link={Api[7].link}
/>
<Card
imgsrc={Api[8].imgsrc}
sname={Api[8].sname}
link={Api[8].link}
/>
<Card
imgsrc={Api[9].imgsrc}
sname={Api[9].sname}
link={Api[9].link}
/>
<h3 className='footer'>© 2022 moviesAndseries </h3>
  </>
  );
}

export default App;
