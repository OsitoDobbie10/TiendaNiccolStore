import React from 'react'
import Customfilters from "../Custom/Customfilters";
import "../Styles/StylesFormMcustom.css"
const FormMcustom = (props) => {
  const {TallaZapatos,
    ColorZapatos,
    variables,
    setVariables,
    nombreRefid1,
    nombreRef2id,
    nombreRef3id,
    valormaximo
    } = props;  

    //const {boton} = CustomBotom();
    
    const changeTalla = (e)=>{
      setVariables(prevState=>({
        ...prevState,
        Talla: e.target.value
      }))
    }
  
    const changecolor = (e)=>{
      setVariables(prevState=>({
        ...prevState,
        color: e.target.value
      }))
    }
  
    const changeprecio = (e)=>{
      setVariables(prevState=>({
        ...prevState,
        precio: e.target.value
      }))}

    return (
      <div className='mobile'>
      <div className="cuerpo">
      <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Precio
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <div className='Precio'> 
        <label htmlFor={nombreRefid1}>Precio a partir de:</label>
        <input onChange={changeprecio}
          type='range'
          id={nombreRefid1}
          min='0'
          max={valormaximo}
          value={variables.precio}
        />
        <span>{`${variables.precio}$`}</span>
       </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Talla
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <div className='Talla'>
        <label htmlFor={nombreRef2id}>Filtro talla</label>
        <select id={nombreRef2id} onChange={changeTalla}>
        {
          TallaZapatos.map((sizeshoes)=>{
            return <option key={TallaZapatos.indexOf(sizeshoes)} value={sizeshoes}>
              {sizeshoes}
            </option>
          })
        }
        </select>
        </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         Color
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <div className='Color'>
        <label htmlFor={nombreRef3id}>Filtro color</label>
        <select id={nombreRef3id} onChange={changecolor}>
          {
            ColorZapatos.map((colorshoes)=>{
              return <option key={ColorZapatos.indexOf(colorshoes)} value={colorshoes}>
                     {colorshoes}
                    </option>
            })
          }
        </select>
   </div>
        </div>
      </div>
    </div>
      </div>
      </div>
      
      </div>
    )
}

export default FormMcustom