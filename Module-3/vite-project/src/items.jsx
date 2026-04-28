import react from "react";
 
//Diaplay a list of items
const items = [
    {
        id:1,
        name: "item 1",
        price: 10,
    },
    {
        id: 2,
        name: "item 2",
        price: 20,

    }
];
function items(){
    return(
        <div>
            <h1>Items</h1>
            <ul>
                {items.map((item) =>(
                    <li key={item.id}>
                    <h2></h2>
                ))}
            </ul>
        </div>
    )
}