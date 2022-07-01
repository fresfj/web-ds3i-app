import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

const FormOne = ( { data = null } ) => {
    const form = useRef();
    const [ result, showresult ] = useState(false);
    const [ name, setName ] = useState('');
    const [ budgetData ] = useState(data)
    const validationSchema = Yup.object().shape({
        contactName: Yup.string().required('O seu Nome é importante, por gentile, identifique-se.'),
        contactEmail: Yup.string().required('Email é importante para que em breve te retornaremos o contato.').email('Email é inválido!'),
        contactPhone: Yup.string().required('Telefone é obrigatório para que possamos te retorna com mais informações.'),
        contactPrivacy: Yup.boolean().oneOf([true], "Você deve aceitar os Termos e Condições."),
    }).required()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const Result = () => {
        return (
            <Alert variant="success" className="mb-3 px-2 py-1 fade show fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2"  onClose={() => showresult(false)} dismissible>
                <h4 className="alert-heading fs-4 mt-2">Shoow {name}!!!</h4>
                <p className='mb-2'>Recebemos sua solicitação, deixa que agora é com os Dev's, entraremos em contato tão rápido quanto seu sucesso!</p>
            </Alert>
        )
    }

    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
        setName(data.contactName)
        sendEmail()
    };

    const sendEmail = () => {
        emailjs.sendForm('service_rcb2ohn', 'template_gb8h3i7', form.current, '0EOM79Rpgb022xPgL')
          .then((result) => {
              console.log(result.text);
              reset()
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 50000);
    
    return (
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="axil-contact-form">
            { budgetData && budgetData.summed !== undefined ? 
                budgetData.summed.map((item, key) => 
                    <input key={key} type="hidden" name='budget[]' value={`Text: ${item.text} value: ${item.value}`} />
                )
                : '' }
        <div className="form-group">
            <label>Nome</label>
            <input type="text" className={`form-control ${errors.contactName ? 'is-invalid' : ''}`} {...register('contactName')} name="contactName" placeholder="João da Silva" />
            <div className="invalid-feedback">{errors.contactName && errors.contactName.message}</div>
        </div>
        <div className="form-group">
            <label>E-mail</label>
            <input type="email" className={`form-control ${errors.contactEmail ? 'is-invalid' : ''}`} {...register('contactEmail')} name="contactEmail" placeholder="joao@mail.com" />
            <div className="invalid-feedback">{errors.contactEmail && errors.contactEmail.message}</div>
        </div>
        <div className="form-group mb--40">
            <label>Telefone</label>
            <input type="tel" className={`form-control ${errors.contactPhone ? 'is-invalid' : ''}`} {...register('contactPhone')} name="contactPhone" placeholder="(11) 98888-2323" />
            <div className="invalid-feedback">{errors.contactPhone && errors.contactPhone.message}</div>
        </div>
        <div className="form-group mb-3 float-start">
            <input type="checkbox" className={`form-check-input form-control ${errors.contactPrivacy ? 'is-invalid' : ''}`} {...register('contactPrivacy')} name="contactPrivacy" id="privacy-policy"/>
            <label className="form-check-label" htmlFor="privacy-policy">Eu aceito os <strong>Termos</strong> da <Link to={process.env.PUBLIC_URL + "/privacy-policy/"}>Política de Privacidade</Link></label>
            <div className="invalid-feedback">{errors.contactPrivacy && errors.contactPrivacy.message}</div>
        </div>
        <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Solicitar um orçamento</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormOne;