import React, {useState} from 'react' // kullanacağımız hook'u import ediyoruz.
import {selamText} from "./data"; // kullanacağımız  selam kelimelerini import ediyoruz.

//BİLGİ
//useState Hook'u değişiklikleri(state) kontrol etmemizi sağlar.
// 2 parametre alır. (ilk durum) ve değişen Durum
//Hook sadece react componenti içinde çağrılmalıdır.



const UseStateBasic = () => {
    // const[text, setText] =  useState('Buraya istediğimiz Başlangıç  Değerini Verebiliriz.') /*Boşda bırakılabilir*/
    const [selam, setSelam] = useState('Merhaba') // en üstte yazılmalıdır.
    
    const changeSelam = ()=>{
      setSelam(selamText[Math.floor(Math.random() * selamText.length)]);
;
    }

  return (
    <div className="Text">
      <h2>{selam}</h2>
      <button className= "btn" onClick={changeSelam}>Metni Değiştir</button>
    </div>
  );
}

export default UseStateBasic