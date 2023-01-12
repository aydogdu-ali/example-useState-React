import React, {useState} from 'react' // kullanacağımız hook'u import ediyoruz.
import {selamText} from "./data"; // kullanacağımız  selam kelimelerini import ediyoruz.

//BİLGİ
//useState Hook'u değişiklikleri(state) kontrol etmemizi sağlar.
// 2 parametre alır. (ilk durum) ve değişen Durum
//Hook sadece react componenti içinde çağrılmalıdır.

const UseStateBasic = () => {
    // const[text, setText] =  useState('Buraya istediğimiz Başlangıç  Değerini Verebiliriz.') Boşda bırakılabiliriz
    const [selam, setSelam] = useState('Merhaba') // en üstte yazılmalıdır.
    
    // state'i değiştirecek onclick fonsiyonunu tanımladım.
    //her butona tıkladığımızda selam değişecektir.
    const changeSelam = ()=>{
      setSelam(selamText[Math.floor(Math.random() * selamText.length)]); // data dosyasında bulunan selam metinlerini rastgele döndürüyorum.
;
    }

  return (
    <div className="Text">
      <h2>{selam}</h2> {/*state durumunu dinamik hale getirdim.*/}
      <button className= "btn" onClick={changeSelam}>Metni Değiştir</button> {/*Her tıkladığımızda state değişecektir Ve yeni durum render edilecektir.*/}
    </div>
  );
}

export default UseStateBasic