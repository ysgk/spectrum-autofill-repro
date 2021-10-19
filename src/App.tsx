import React from 'react';
import './App.css';
import { Button, TextField } from '@adobe/react-spectrum'
import { useForm, Controller } from 'react-hook-form'

interface FormValues {
  email: string
  password: string
}

function App() {
  const { control,handleSubmit } = useForm<FormValues>({ defaultValues: { email: '', password: '' } , mode: 'onChange'})

  const onSubmit = (values: any) => {
    console.log(values)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller control={control} name='email' render={({ ref: _, ...field }) => (
          <TextField {...field} type={'email'} label={'email'} UNSAFE_style={{ width: '100%'}}/>
        )}/>
        <Controller control={control} name='password' render={({ ref: _, ...field }) => (
          <TextField {...field} type={'password'} label={'password'} UNSAFE_style={{ width: '100%'}}/>
        )}/>
        <Button variant='cta' type={'submit'}>送信</Button>
      </form>
    </div>
  );
}

export default App;
