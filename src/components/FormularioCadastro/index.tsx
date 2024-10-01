import { Button, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import { useState } from 'react'
import { FormCadastroProps, FormValues } from '../../models/formCadastro'
import { toast } from 'react-toastify'

export function FormCadastro({ onSubmit }: FormCadastroProps) {
  const [values, setValues] = useState<FormValues>({
    nome: '',
    endereco: '',
    email: '',
    telefone: '',
    cpf: '',
    dataNascimento: '',
  })
  const [errorMessages, setErrorMessages] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: '',
    cpf: '',
    dataNascimento: '',
  })

  const [errors, setErrors] = useState({
    nome: false,
    endereco: false,
    email: false,
    telefone: false,
    cpf: false,
    dataNascimento: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const isValidEmail = (email: string) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(email)
  }

  const validateFields = () => {
    const newErrors = {
      nome: !values.nome,
      endereco: !values.endereco,
      email: !values.email || !isValidEmail(values.email),
      telefone: !values.telefone,
      cpf: !values.cpf,
      dataNascimento: !values.dataNascimento,
    }

    const newErrorMessages = {
      nome: !values.nome ? 'Nome é obrigatório' : '',
      endereco: !values.endereco ? 'Endereço é obrigatório' : '',
      email: !values.email
        ? 'Email é obrigatório'
        : !isValidEmail(values.email)
          ? 'Coloque um email válido'
          : '',
      telefone: !values.telefone ? 'Telefone é obrigatório' : '',
      cpf: !values.cpf ? 'CPF é obrigatório' : '',
      dataNascimento: !values.dataNascimento
        ? 'Data de nascimento é obrigatória'
        : '',
    }

    setErrors(newErrors)
    setErrorMessages(newErrorMessages)
    return Object.values(newErrors).every((error) => !error)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validateFields()) {
      console.log('Formulário válido', values)
      onSubmit(values)
    } else {
      toast.error('Formulário inválido, dados obrigatórios ausentes.')
    }
  }

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={errors.nome}
            id="outlined-nome"
            name="nome"
            label="Nome"
            value={values.nome}
            onChange={handleChange}
            helperText={errors.nome ? 'Nome é obrigatório.' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={errors.endereco}
            id="outlined-endereco"
            name="endereco"
            label="Endereço"
            value={values.endereco}
            onChange={handleChange}
            helperText={errors.endereco ? 'Endereço é obrigatório.' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={errors.email}
            id="filled-email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            helperText={errorMessages.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={errors.telefone}
            id="outlined-telefone"
            name="telefone"
            label="Telefone"
            value={values.telefone}
            onChange={handleChange}
            helperText={errors.telefone ? 'Telefone é obrigatório.' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={errors.cpf}
            id="outlined-cpf"
            name="cpf"
            label="CPF"
            value={values.cpf}
            onChange={handleChange}
            helperText={errors.cpf ? 'CPF é obrigatório.' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={errors.dataNascimento}
            id="outlined-dataNascimento"
            name="dataNascimento"
            label="Data de Nascimento"
            type="date"
            value={values.dataNascimento}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            helperText={
              errors.dataNascimento ? 'Data de nascimento é obrigatória.' : ''
            }
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ m: 1 }}>
        Enviar
      </Button>
    </Box>
  )
}
