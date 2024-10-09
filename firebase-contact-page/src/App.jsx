import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import { FaSearch } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { collection } from "firebase/firestore";
import { db } from "./config/firebase";
import { getDocs } from "firebase/firestore";

const App = () => {


  const [contacts , setContacts] = useState([]);

  useEffect(() => { 
    const fetchContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactRef);
        console.log(contactsSnapshot);
        const contactList = contactsSnapshot.docs.map((doc) => doc.data());
        console.log(contactList);
        setContacts(contactList);
        
      // const response = await fetch(BASE_URL);
      // const data = await response.json();
      // setContacts(data);
      } catch (error) {
        console.log(error);
        
      }
    };
    fetchContacts();
  }, []);


  return (
    <div className=" mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex">
      <div className="flex realative items-center flex-grow">
      <FaSearch className="text-white text-3xl absolute ml-2 " />
        <input type="text" className="flex-grow bg-transparent border-white border rounded-md h-10 text-white pl-11" />
      </div>
      <HiOutlinePlusCircle className="text-white text-5xl ml-4 cursor-pointer" />
      </div>
    </div>
  )
}

export default App
