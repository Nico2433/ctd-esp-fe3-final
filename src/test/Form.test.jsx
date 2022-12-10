import  '@testing-library/jest-dom'
import {render, screen , fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Form from '../Components/Form';

beforeEach(() =>{
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Form/>);
})

test('Verificar que se renderice el form', () => {

    const inputName = screen.getByLabelText("Name");

    const inputEmail = screen.getByLabelText("Email");

    const buttonSubmit= screen.getByRole("button", {name: /Submit/i}); 

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(buttonSubmit).toBeInTheDocument();
})

test('Verificar que los campos coincidan con los escritos', async () => {

    const inputName = screen.getByLabelText("Name");
    fireEvent.change(inputName, {target: {value: 'Tests'}})

    const inputEmail = screen.getByLabelText("Email");
    fireEvent.change(inputEmail, {target: {value: 'test@gmail.com'}})

    const buttonSubmit= screen.getByRole("button", {name: /Submit/i}); 
    fireEvent.click(buttonSubmit)

    const wordMeaning = await screen.findByText(/Thanks Tests, we'll send you an email/i)

    expect(wordMeaning).toBeInTheDocument();
})