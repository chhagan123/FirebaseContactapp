import { ImCross } from "react-icons/im";
import {Field, Form,Formik,} from "formik";
import * as Yup from "yup"; 
import { addDoc, collection, updateDoc,doc} from "firebase/firestore";
import {db} from "../config/firebase"
import { toast } from "react-toastify";
export const Modal = ({isopen,close,isUpdate,contact}) => {

 
  

  const Addcontact = async(contact) => {
    try {
      const contactRef = collection (db,"contex");
    await addDoc(contactRef,contact);
    close();
    toast.success("Contact Added Succesfully")

    }catch(error) {
      console.log(error);
      
    }
    
  }


  const Updatacontact = async(contact,id) => {
    try {
      const contactRef =  doc(db,"contex",id);
    await updateDoc(contactRef,contact);
    close();
    toast.success("Contact Added Succesfully")
    console.log(contact.id)

    }catch(error) {
      console.log(error);
      
    }
    console.log(contact.id)
    
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });
    return <>
     {isopen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white w-full max-w-[400px] p-6 rounded-lg shadow-lg relative">
      <div className="absolute top-4 right-4">
        <ImCross onClick={close} className="cursor-pointer text-gray-500 hover:text-gray-700" />
      </div>
      
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Add Contact</h2>
      <Formik
         initialValues={isUpdate ? {
          name:contact.name ,
          email:contact.email ,
          
         }:
         {
          name:"",
          email:"",
         }}

         validationSchema={validationSchema} // Add validation schema here
         onSubmit={(values,{resetForm}) => {
          isUpdate ? Updatacontact(values,contact.id):
          Addcontact(values);
          resetForm();
          console.log(values)}}
         
        
      >
      <Form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {isUpdate ? "Update" : "Add"}
         
        </button>
      </Form>
      </Formik>
    
    </div>
  </div>
)}

    </>
}