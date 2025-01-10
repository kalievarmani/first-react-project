// import {Link} from "react-router-dom";
// import {useState} from "react";

// const ProductsItem = () => {
//     const [data, setData] = useState();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };
//     const updateItem = (e) => {
//         console.log(data)
//         data.id = id;
//         fetch('http://localhost:3000/${id}', {
//             method: 'PATH',
//             body: data
//         })
//     }
//     return (
//         <div>
//             <form onSubmit={updateItem}>
//                 <input
//                     name="name"
//                     value={data.name}
//                     onChange={handleChange}
//                     placeholder="Name"
//                 />
//             </form>
//         </div>
//     )
// };

// export default ProductsItem



import { useState } from "react";

const ProductsItem = () => {
    const [data, setData] = useState({ name: "" }); // Начальное состояние с пустым значением

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updateItem = async (e) => {
        e.preventDefault(); // Предотвращение перезагрузки страницы
        const id = 1; // Укажите реальный идентификатор

        try {
            const response = await fetch(`http://localhost:3000/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Ошибка при обновлении данных");
            }

            const result = await response.json();
            console.log("Обновлено:", result);
        } catch (error) {
            console.error("Ошибка:", error);
        }
    };

    return (
        <div>
            <form onSubmit={updateItem}>
                <input
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <button type="submit">Обновить</button>
            </form>
        </div>
    );
};

export default ProductsItem;
