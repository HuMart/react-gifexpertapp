import { React } from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GiftExpertApp = () => {

    // const categories = ["One Punch", "Samurai x", "Dragon Ball" ]

    const [categories, setCategories] = useState(["One Punch"]);

    // const handleAdd = () => {
    //     setCategories(cats => [...cats, "Superman" ]);
    // };

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>


            <ol>
                { 
                    categories.map( category => (
                         
                            <GifGrid
                                key={ category } 
                                category={ category } 
                            />
                    ))
                }
            </ol>
        </div>
    );
};

