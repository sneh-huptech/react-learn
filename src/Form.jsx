
import { useEffect, useState } from "react";

  function Form() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


    return (
      
      <div>
      <h1>Products Table</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td><button>Delete</button><button>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
 
  }


  export default Form;