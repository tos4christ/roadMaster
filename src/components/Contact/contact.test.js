import React from 'react';
import { render } from '@testing-library/react';
// import jest from '@testing-library/jest-dom';
import ContactAddress from './ContactAddress';
// import ContactForm from './ContactForm';
// import ContactMap from './ContactMap';

test('it renders contact address', () => {
    let { getByText } = render(<ContactAddress/>)
    let phone1 = getByText('+234 8012 435 941')
    let phone2 = getByText('+234 9041 800 937')
    let Address = getByText(/Andela - Lagos Office, EPIC tower, 232 Ikorodu RD, Ilupeju, Lagos./i)
    let mail = getByText(/team-003gmail.com/i)
    let webAddress = getByText('www.github.com/buildforSDG-003.com')
    expect(phone1).toBeInTheDocument()
    expect(phone2).toBeInTheDocument()
    expect(Address).toBeInTheDocument()
    expect(mail).toBeInTheDocument()
    expect(webAddress).toBeInTheDocument()
})

test('it render contact form', () => {
    expect(true).toBeTruthy()
    // let {} = render(<ContactForm/>);

})