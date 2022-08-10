import { useState } from "react";

export default function Teste() {

    const [data, setData] = useState('');
    // const [daySelina, setDaySelina] = useState('');

    function dataSelina() {
        let date: Date = new Date(data);
        const day = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
        let teste = (date.getFullYear() - 1900) + '' + day.toString().padStart(3, '0');
        // setDaySelina(teste);
        return (date.getFullYear() - 1900) + '' + day.toString().padStart(3, '0');
    }

    function julianDateSixToGregorianDate() {
        // var teste:number = + daySelina; 
        var number = 0 + dataSelina();
        let julianYear = number.toString().slice(0, 3);
        let julianDay = number.toString().slice(3, 6);
        let date = new Date(1900 + parseInt(julianYear), 0, 0, 0, 0, 0)
        date.setDate(date.getDate() + parseInt(julianDay));
        let day = date.getDate().toString().padStart(2, '0'),
            mouth = (date.getMonth() + 1).toString().padStart(2, '0'),
            year = date.getFullYear();

        if (day && mouth && year) {
            return day + "/" + mouth + "/" + year;
        }
        return "";
    }


    return (
        <div>
            <input type="date" onChange={e => setData(e.target.value)} /> <br></br>
            <h1>{dataSelina()}</h1>
            <h1> { julianDateSixToGregorianDate(12) }</h1>
        </div>
    )
}
