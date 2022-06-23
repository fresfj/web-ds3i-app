import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const FormThree = () => {

    const form = useRef();

    const [ result, showresult ] = useState(false);

    const Result = () => {
        return (
            <Alert variant="success" className="mb-3 px-2 py-1 fade show fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2"  onClose={() => showresult(false)} dismissible>
                    <h4 className="alert-heading fs-4 mt-2">Shoow {name}!!!</h4>
                    <p className='mb-2'>Recebemos sua solicitação, deixa que agora é com os Dev's, entraremos em contato tão rápido quanto seu sucesso!</p>
            </Alert>
        )
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yj5dgzp', 'template_hfduayo', form.current, 'WLENsTkBytC0yvItS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showresult(true);
      };

        setTimeout(() => {
            showresult(false);
        }, 5000);


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="contact-name" placeholder="John Smith" required />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="contact-email" placeholder="example@mail.com" required />
        </div>
        <div className="form-group mb--40">
            <label>How can we help you?</label>
            <textarea name="contact-message" id="contact-message" className="form-control textarea" cols="30" rows="6"></textarea>
        </div>
        <div className="form-group text-end">
            <button type="submit" className="axil-btn btn-fill-primary w-auto btn-primary" name="submit-btn">SEND</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormThree;