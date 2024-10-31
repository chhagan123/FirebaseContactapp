import { useEffect, useState } from "react";
import { collection,deleteDoc,getDocs,doc } from "firebase/firestore";
import {db} from "../config/firebase";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import { Modal } from "./modal";





export const Addcontact = ({}) => {
    const [Contact,setcontact] = useState([]);
    const [isopen,setopen] = useState(false);

    const open = () => {
        setopen(true);
        
    }
    const close = () => {
        setopen(false);
    }
   
    const deletcontact = async (id) => {
        try {
            await deleteDoc(doc(db,"contex",id))
        }catch(error){
            console.log(error)
        }
    }

   

    useEffect(() => {
        const  getcontact = async () => {
             try {
                const contactsRef = collection(db,"contex")
                const contactsnapshot = await getDocs(contactsRef);
                const contactlist = contactsnapshot.docs.map((doc) => {
                 return {
                    id:doc.id,
                    ...doc.data()
                 }   
                });
                setcontact(contactlist);
               
               
             }catch (error){
               console.log(error);
             }
        }
        getcontact();
    })

   
    return (
        <>
        
        <div>
            <div>
                {Contact.map(contact => (
                    
                    <div key={contact.id} className=" flex  bg-yellow border border-yellow mt-4 rounded-lg" >
                       
                       <div className="flex items-center pl-2">
              <FaUser className="text-orange text-4xl" />
            </div>
            <div className="pl-2">
              <h2 className="font-medium">{contact.name}</h2>
              <h2 className="text-sm">{contact.email}</h2>
            </div>

            <div className="flex text-3xl items-center pl-4">
              <RiEditCircleFill
                onClick={() => openForEdit(contact)} // Open modal in edit mode for this contact
                className="cursor-pointer"
              />
              <MdDelete onClick={() => deletcontact(contact.id)} className="cursor-pointer" />
            </div>
                       
                      
                       </div>
                   
                ) )}
            </div>
            < Modal  isUpdate contact={Contact} isopen={isopen} close={close}/>
            
        </div>
        </>
    )
}