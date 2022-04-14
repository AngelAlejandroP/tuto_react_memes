import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';



function App() {

  var [linea1, setLinea1]=useState('');
  var [linea2, setLinea2]=useState('');
  var [imagen, setImagen]=useState('');

  const onChangeLinea1= function (evento) {
    setLinea1(evento.target.value);
  }

  const onChangeLinea2= function(evento){
    setLinea2(evento.target.value);
  }

  const onChangeImagen= function(evento){
    setImagen(evento.target.value);
  }

  const onClicExportar= function(evento){
    /* para exportar instala 
      npm install --save html2canvas
    */
   html2canvas(document.querySelector("#meme")).then(canvas => {
     var img = canvas.toDataURL('image/png');
     var link = document.createElement('a');
     link.download = 'meme.png';
     link.href=img;
     link.click();
   });
  }

  return (
    <div className="App">
     
    <select onChange={onChangeImagen}>
      <option value="img1">Exelente</option>
      <option value="img2">Obligame</option>
      <option value="img3">Confiable</option>
      <option value="img4">Pikachu</option>
      <option value="img5">Ajio</option>
      <option value="img6">Ummm</option>
    </select><br/>

    <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'></input><br/>
    <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'></input><br/>
    <button onClick={onClicExportar}>Exportar</button><br/>

    <div className='meme' id='meme'>
      <span>{linea1}</span><br/>
      <span>{linea2}</span>
      <img src={"/img/" + imagen + ".jpg"}></img>
    </div>

    </div>
  );
}

export default App;
