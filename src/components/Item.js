const Item=({producto}) => {

    return(
     <div>
            <article key={producto.id}>
                <h3>{producto.title}</h3>
            </article>
     </div>
    ) 
};

export default Item;