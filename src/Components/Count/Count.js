import {useState} from "react";

const Count = () => {

    const [b, setB] = useState(0); //повертає масив з двох елементів, В- це перше значення(початкове, тобто зараз це 0),сетВ- це функція за допомогою якоїя можу змінити значення яке записано в В і перезавантажую всю компоненту
    console.log('Count');


    // const inc = () => {
    //     setB(prevState => prevState + 1)
    // }

    return (
        <div>
            <div> B : {b} </div>
            <button onClick={() => setB(prevState => prevState + 1)}> Inc</button>
        </div>
    );
};

export {Count};