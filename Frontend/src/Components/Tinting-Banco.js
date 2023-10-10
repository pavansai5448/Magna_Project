import {useState} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Forms.css';
import { Button } from 'antd';

const Tinting = ({username}) => {

     // Date has to be included
     const [NameOfTheProject,setNameOfTheProject]=useState('')
     const [Fandeck,setFandeck]=useState('')
     const [ShadeCode,setShadeCode]=useState('')
     const [ShadeName,setShadeName]=useState('')
     const [Product,setProduct]=useState('')
     const [Base,setBase]=useState('')
     const [BaseBatchNo,setBaseBatchNo]=useState('')
     const [FormulationFor1LitrePackSize,setFormulationFor1LitrePackSize]=useState('')
     const [QuantityTintedInLitres,setQuantityTintedInLitres]=useState(0)
     const [Reference,setReference]=useState('')
     const [ForProjectOrRetail,setForProjectOrRetail]=useState('')
     const [ShadeMatchConfirmation,setShadeMatchConfirmation]=useState('')
     const [ShadePatch,setShadePatch]=useState('')
     const [OtherObservations,setOtherObservations]=useState('')
     const [DispensingMachine,setDispensingMachine]=useState('')
     const [isPending,setIsPending]=useState(false)
     const [Date1,setDate1]=useState('');
     var CreateBy=username;
     const handleSubmit=(e)=>{
         e.preventDefault();
         setIsPending(true)
         const date = new Date();
         let day = date.getDate();
         let month = date.getMonth() + 1;
         let year = date.getFullYear();
         toast('Data is being saved', {
             position: "top-center",
             autoClose: 50,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
             });
         const data={
             "Date": Date1,
             "NameOfTheProject": NameOfTheProject,
             "Fandeck": Fandeck,
             "ShadeCode": ShadeCode,
             "ShadeName": ShadeName,
             "Product": Product,
             "Base": Base,
             "BaseBatchNo": BaseBatchNo,
             "FormulationFor1LitrePackSize": FormulationFor1LitrePackSize,
             "QuantityTintedInLitres":parseInt(QuantityTintedInLitres),
             "Reference": Reference,
             "ForProjectOrRetail": ForProjectOrRetail,
             "ShadeMatchConfirmation": ShadeMatchConfirmation,
             "ShadePatch": ShadePatch,
             "OtherObservations": OtherObservations,
             "DispensingMachine": DispensingMachine,
             "CreateBy": CreateBy,
             "day": day,
             "month": month,
             "year": year
         }
         console.log(JSON.stringify(data))
         fetch('http://localhost:5147/api/tinting/post',{
             method:'POST',
             headers:{"content-Type":"application/json"},
             body:JSON.stringify(data)
         }).then(()=>{
             setIsPending(false);
         })
     }
    return (
    <>
    
        <h1 className="text-center">Tinting Banco</h1>
        {/* <h3 className="enter-details">Enter Details:</h3> */}
        <div className="container-fluid mt-5">
            <form className="forms"  onSubmit={handleSubmit}>
                <div className="row"> 
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="Sno">Sno:</label>
                            <input type="integer" className="form-control" id="Sno" placeholder="Enter Sno" name="Sno" required/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="Date">Date:</label>
                            <input type="date" className="form-control" id="Date" name="Date" value={Date1}  onChange={(e)=>{setDate1(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="nameofp">Name Of Project:</label>
                            <input type="text" className="form-control" id="nameofp" placeholder="Enter name of project" name="nameofp" value={NameOfTheProject} onChange={(e)=>{setNameOfTheProject(e.target.value)}}  required/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="fandeck">Fandeck:</label>
                            <input type="text" className="form-control" id="fandeck" placeholder="Enter name of shade card" name="fandeck" value={Fandeck} onChange={(e)=>{setFandeck(e.target.value)}} required/>
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="shadec">Shade Code:</label>
                            <input type="text" className="form-control" id="shadec" placeholder="Enter Shade Code" name="shadec" value={ShadeCode} onChange={(e)=>{setShadeCode(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="shaden">Shade Name:</label>
                            <input type="text" className="form-control" id="shaden" placeholder="Enter Shade Name" name="shaden" value={ShadeName} onChange={(e)=>{setShadeName(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="product">Product:</label>
                            <input type="text" className="form-control" id="product" placeholder="Enter Product" name="product" value={Product} onChange={(e)=>{setProduct(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="base">Base:</label>
                            <input type="text" className="form-control" id="base" placeholder="Enter Base" name="base" value={Base} onChange={(e)=>{setBase(e.target.value)}} required/>
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="bbn">Base Batch Number:</label>
                            <input type="text" className="form-control" id="bbn" placeholder="Enter Base Batch Number" name="bbn" value={BaseBatchNo} onChange={(e)=>{setBaseBatchNo(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="formulation">Formulation for 1L:</label>
                            <input type="text" className="form-control" id="formulation" placeholder="Enter Formulation for 1L Pack Size" name="formulation" value={FormulationFor1LitrePackSize} onChange={(e)=>{setFormulationFor1LitrePackSize(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="qt">Quantity Tinted in Litres:</label>
                            <input type="integer" className="form-control" id="qt" placeholder="Enter Quantity Tinted in Litres" name="qt" value={QuantityTintedInLitres} onChange={(e)=>{setQuantityTintedInLitres(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="form-group">
                            <label for="ref">Reference/Standard/Customized      : </label>
                            <select className="form-control" name="ref" id="ref" value={Reference} onChange={(e) => { setReference(e.target.value) }} required>
                                <option value="">Select</option>
                                <option value="reference">Reference</option>
                                <option value="std">Standard</option>
                                <option value="cust">Customized</option>
                            </select>
                        </div>
                    </div>
                
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="proj">Project/Retail:</label>
                            <select className="form-control" name="proj" id="proj" value={ForProjectOrRetail} onChange={(e) => { setForProjectOrRetail(e.target.value) }} required>
                                <option value="">Select Project or Retail</option>
                                <option value="pr">Project</option>
                                <option value="ret">Retail</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="smc">Shade Match Confirmation:</label>
                            <select className="form-control" name="smc" id="smc" value={ShadeMatchConfirmation} onChange={(e) => { setShadeMatchConfirmation(e.target.value) }} required>
                                <option value="">Select Yes or No</option>
                                <option value="yes">YES</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="sps">Shade Patch/Swatch:</label>
                            <input type="text" className="form-control" id="sps" placeholder="Enter Shade Patch/Swatch" name="sps" value={ShadePatch} onChange={(e)=>{setShadePatch(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="ob">Other Observations:</label>
                            <input type="text" className="form-control" id="ob" placeholder="Enter Other Observations" name="ob" value={OtherObservations} onChange={(e)=>{setOtherObservations(e.target.value)}} required/>
                        </div>
                    </div>
                
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="dp">Dispensing Machine:</label>
                            <input type="text" className="form-control" id="dp" placeholder="Enter Dispensing Machine" name="dp" value={DispensingMachine} onChange={(e)=>{setDispensingMachine(e.target.value)}} required/>
                        </div>
                    </div>
                </div> 
                <div className="col-md-2 px-0">
            {isPending ? (
              <Button type="primary" htmlType="submit" disabled>
                Submit
              </Button>
            ) : (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            )}
          </div>

            </form>
        </div>
        <ToastContainer />
    </>

    );
}
 
export default Tinting;