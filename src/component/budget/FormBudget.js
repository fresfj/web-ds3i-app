import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { BiMailSend } from "react-icons/bi";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

const FormBudget = ( { data } ) => {
    const form = useRef();
    const [ result, showresult ] = useState(false);
    const [ checked, setChecked ] = useState([]);
    const [ name, setName ] = useState('');

    const prazos = ["De 1 a 3 meses", "Mais de 3 meses", "Não tenho"];
    const orcamentos = ["Até R$100.000", "De R$100.000 a R$200.000", "De R$200.000 a R$300.000", "De R$300.000 a R$400.000", "Não tenho"];
    const indicacoes = ["Pesquisa no Google", "Indicação de um amigo", "Indicação de um empresa", "Redes sociais", "Outra forma"];
    const checkList = [
       {title: "Aplicativo iOS", sub: "Iphones ou Ipads"},
       {title: "Aplicativo Android", sub: "Smartphones ou Tablets"},
       {title: "Aplicativo Web", sub: "Webapp, Painel Admin"},
       {title: "Loja Virtual", sub: "E-commerce"},
       {title: "Design", sub: "Interface ou usabilidade"},
       {title: "Integrações", sub: "Backend, API, frontend, etc"},
       {title: "WebSite", sub: "Landing page, blog, etc"},
       {title: "Não sei", sub: "Gostaria de uma consultoria"}
    ];

    const prazosOptions = prazos.map((prazo, key) => (
        <option value={prazo} key={key}>{prazo}</option>
    ));
    const orcamentosOptions = orcamentos.map((orcamento, key) => (
        <option value={orcamento} key={key}>{orcamento}</option>
    ));
    const indicacoesOptions = indicacoes.map((indicacao, key) => (
        <option value={indicacao} key={key}>{indicacao}</option>
    ));

    const validationSchema = Yup.object().shape({
        contactName: Yup.string().required('O seu Nome é importante, por gentile, identifique-se.'),
        contactEmail: Yup.string().required('Email é importante para que em breve te retornaremos o contato.').email('Email é inválido!'),
        contactPhone: Yup.string().required('Telefone é obrigatório para que possamos te retorna.'),
        contactDescription: Yup.string().required('Descrição do seu projeto é obrigatório para que possamos realizar o seu orçamento.'),
        contactPrazo: Yup.string().required('').oneOf(prazos, 'Você deve escolher uma opção'),
        contactOrcamento: Yup.string().oneOf(orcamentos, 'Você deve escolher uma opção'),
        contactConheu: Yup.string().oneOf(indicacoes, 'Você deve escolher uma opção'),
        contactChecks: Yup.array().required('Você deve escolher uma opção').min(1,'Você deve escolher uma opção'),
        contactPrivacy: Yup.boolean().oneOf([true], "Você deve aceitar os Termos e Condições."),
    }).required()

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    }
    const {
        register,
        handleSubmit,
        reset,
        formState,
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const { errors } = formState;
    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
        setName(data.contactName)
        sendEmail()
    };

    const Result = () => {
        return (
            <Alert variant="success" className="mb-3 px-2 py-1 fade show fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2"  onClose={() => showresult(false)} dismissible>
                    <h4 className="alert-heading fs-4 mt-2">Shoow {name}!!!</h4>
                    <p className='mb-2'>Recebemos aqui a sua solicitação de orçamento, deixa que agora é com os Dev's, entraremos em contato tão rápido quanto seu sucesso!</p>
            </Alert>
        )
    }

    const sendEmail = () => {
        emailjs.sendForm('service_rcb2ohn', 'template_yymbal4', form.current, '0EOM79Rpgb022xPgL')
          .then((result) => {
              console.log(result.text);
              reset()
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showresult(true);
    };
    const { isDirty, isValid, isSubmitSuccessful } = formState

    console.log("SUBMITTED ", isSubmitSuccessful)
    console.log("isDirty ", isDirty);
    console.log("isValid ", isValid);

    setTimeout(() => {
        showresult(false);
    }, 5000);
    
    return (
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className= {`axil-contact-form needs-validation`} >
        <legend className='my-5'>Informações de contato</legend>
        <div className="row">
            <div className="form-group col-sm-12 col-md-6">
                <label>Nome</label>
                <input type="text" className={`form-control ${errors.contactName ? 'is-invalid' : ''}`} {...register('contactName')} name="contactName" placeholder="Digite seu nome" />
                <div className="invalid-feedback">{errors.contactName && errors.contactName.message}</div>
            </div>
            <div className="form-group col-sm-12 col-md-6">
                <label>Empresa</label>
                <input type="text" className={`form-control`} name="contactEmpresa" placeholder="Digite o nome da sua empresa" />
            </div>
        </div>
        <div className="row">
            <div className="form-group col-sm-12 col-md-6">
                <label>E-mail</label>
                <input type="email" className={`form-control ${errors.contactEmail ? 'is-invalid' : ''}`} {...register('contactEmail')} name="contactEmail" placeholder="Digite seu e-mail" />
                <div className="invalid-feedback">{errors.contactEmail && errors.contactEmail.message}</div>
            </div>
            <div className="form-group col-sm-12 col-md-6">
                <label>Telefone</label>
                <input type="tel" className={`form-control ${errors.contactPhone ? 'is-invalid' : ''}`} {...register('contactPhone')} name="contactPhone" placeholder="Digite seu telefone" />
                <div className="invalid-feedback">{errors.contactPhone && errors.contactPhone.message}</div>
            </div>
        </div>
        <legend className='my-5'>O que você está procurando?</legend>
        <div className="row">
            {checkList.map((item, index) => (
                <div className="form-group col-sm-12 col-md-6" key={index}>
                    <div className="form-check form-switch" onChange={handleCheck}>
                        <input className={`form-check-input ${errors.contactChecks ? 'is-invalid' : ''}`} {...register('contactChecks')} type="checkbox" value={item.title} id={index} />
                        <label className="form-check-label" htmlFor={index}> {item.title} <span>({item.sub})</span></label>
                        { (index+1)===checkList.length &&
                        <div className={`invalid-feedback`}>{errors.contactChecks && errors.contactChecks.message}</div>}
                    </div>
                </div>
            ))}
        </div>
        <legend className='my-5'>Como é sua ideia ou projeto?</legend>
        <div className="row">
            <div className="form-group col-sm-12 col-md-12">
                <label>Seu projeto já possui um nome?</label>
                <input type="text" className={`form-control`} name="contactProject" placeholder="Digite seu do seu Projeto" />
            </div>
        </div>
        <div className="form-group">
            <label>Descrição</label>
            <textarea className={`form-control ${errors.contactDescription ? 'is-invalid' : ''}`} {...register('contactDescription')} rows="3" placeholder="Descreva o seu projeto"></textarea>
            <div className="invalid-feedback">{errors.contactDescription && errors.contactDescription.message}</div>
        </div>
        <div className="form-group">
            <label>Referências</label>
            <textarea className={`form-control`} rows="3" placeholder="Descreva o seu referências"></textarea>
            <div className="invalid-feedback">{errors.Description && errors.Description.message}</div>
        </div>
        <legend className='my-5'>Você tem prazo definido?</legend>
        <div className="row">
            <div className="form-group col-sm-12 col-md-6">
                <label>Estimativa de prazo</label>
                <select className={`form-control form-select ${errors.contactPrazo ? 'is-invalid' : ''}`} {...register('contactPrazo')} aria-label="Estimativa de prazo">
                    <option selected>Selecione uma Estimativa</option>
                    {prazosOptions}
                </select>
                <div className="invalid-feedback">{errors.contactPrazo && errors.contactPrazo.message}</div>
            </div>
            <div className="form-group col-sm-12 col-md-6">
                <label>Estimativa de orçamento</label>
                <select className={`form-control form-select ${errors.contactOrcamento ? 'is-invalid' : ''}`} {...register('contactOrcamento')} aria-label="Estimativa de orçamento">
                    <option selected>Selecione uma Estimativa</option>
                    {orcamentosOptions}
                </select>
                <div className="invalid-feedback">{errors.contactOrcamento && errors.contactOrcamento.message}</div>
            </div>
        </div>
        <legend className='my-5'>Como você nos conheceu?</legend>
        <div className="form-group">
            <select className={`form-control form-select ${errors.contactConheu ? 'is-invalid' : ''}`} {...register('contactConheu')} aria-label="Como conheceu a DS3I">
                <option selected>Selecione como conheceu a DS3I</option>
                {indicacoesOptions}
            </select>
            <div className="invalid-feedback">{errors.contactConheu && errors.contactConheu.message}</div>
        </div>
        <div className="form-group mb-3 float-start">
            <input type="checkbox" className={`form-check-input form-control ${errors.contactPrivacy ? 'is-invalid' : ''}`} {...register('contactPrivacy')} name="contactPrivacy" id="privacy-policy"/>
            <label className="form-check-label" htmlFor="privacy-policy">Eu aceito os <strong>Termos</strong> da <Link to={process.env.PUBLIC_URL + "/privacy-policy/"}>Política de Privacidade</Link></label>
            <div className="invalid-feedback">{errors.contactPrivacy && errors.contactPrivacy.message}</div>
        </div>
        <div className="form-group my-5">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn"><BiMailSend size={30} className="me-2"/> Solicitar um orçamento</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormBudget;