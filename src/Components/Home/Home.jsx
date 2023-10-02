import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from "../Cards/Cards";
import Carts from "../Carts/Carts";

function Home() {
  const [cart, setCart] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [price, setPrice] = useState(0);

  const handleAddToCart = (card) => {
    const isExist = cart.find((item) => item.course_name === card.course_name);
    let creditHour = card.credit;
    if (isExist) {
      toast("already added to the list!");
    } else {
      cart.forEach((element) => {
        creditHour = creditHour + element.credit;
      });
      if (creditHour > 20) {
        toast.info("Credit hour maxed out for selected courses", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        const newCart = [...cart, card];
        setCart(newCart);
        setCredit(credit + card.credit);
        setRemainingCredit(remainingCredit - card.credit);
        setPrice(price + card.price);
      }
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="md:flex gap-5">
        <Cards handleAddToCart={handleAddToCart}></Cards>
        <Carts
          cart={cart}
          credit={credit}
          remainingCredit={remainingCredit}
          price={price}
        ></Carts>
      </div>
    </div>
  );
}

export default Home;
