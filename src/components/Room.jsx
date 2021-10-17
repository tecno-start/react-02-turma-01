import React from 'react'
import { Form, FormGroup, Input, Label, FormText, Button } from 'reactstrap';
import ButtonCopy from './ButtonCopy';
import ButtonShare from './ButtonShare';

function Room({ errors, values, handleChange, handleSubmit, loading }) {

    const dateNameRoom = {
        type: 'text',
        placeholder: 'Nome da Sala',
        name: 'nomeSala',
        onChange: handleChange,
        values: values.nomeSala
    }

    const dateMaxParticipants = {
        type: 'number',
        placeholder: 'Máximo 20',
        name: 'maximoParticipantes',
        onChange: handleChange,
        values: values.maximoParticipantes
    }

    const dateMinParticipants = {
        type: 'number',
        placeholder: 'Mínimo 03',
        name: 'minimoParticipantes',
        onChange: handleChange,
        values: values.minimoParticipantes
    }


    const dateRoomPassword = {
        type: 'password',
        placeholder: 'Digite a Senha',
        name: 'senha',
        onChange: handleChange,
        values: values.senha
    }


    return (
        <div>

            <Form >
                <div className="text-center pb-4">
                    <h1>Sala</h1>
                </div>
                <FormGroup>
                    <Label for="nameRoom">Nome da Sala</Label>
                    <Input {...dateNameRoom} required />
                </FormGroup>
                {errors['nomeSala'] && <FormText color="danger">
                    {errors['nomeSala']}
                </FormText>}
                <FormGroup>
                    <Label for="maxParticipants">Máximo de Participantes</Label>
                    <Input {...dateMaxParticipants} required />
                </FormGroup>
                {errors['maximoParticipantes'] && <FormText color="danger">
                    {errors['maximoParticipantes']}
                </FormText>}
                <FormGroup>
                    <Label for="minParticipants">Mínimo de Participantes</Label>
                    <Input {...dateMinParticipants} required />
                </FormGroup>
                {errors['minimoParticipantes'] && <FormText color="danger">
                    {errors['minimoParticipantes']}
                </FormText>}
                <FormGroup>
                    <Label for="withPassword">Com Senha?</Label>
                    <Input type="select" id="select" required onChange={handleChange} values={values.comSenha} defaultValue='Não' name='comSenha'>
                        <option>Sim</option>
                        <option>Não</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="roomPassword">Senha</Label>
                    <Input {...dateRoomPassword} requirid />
                </FormGroup>
                {errors['senha'] && <FormText color="danger">
                    {errors['senha']}
                </FormText>}
            </Form>
            <Button
                size="lg"
                className="bg-gradient-theme-left border-0"
                block
                onClick={handleSubmit}>
                {!loading ? "Criar Sala" : "Carregando.."}
            </Button>
            <hr />
            <div className="d-flex justify-content-around">
                <ButtonCopy />
                <ButtonShare />
            </div>
            <hr />
            <div style={{
                'textAlign': 'center'
            }}>
                <span>link criado</span>

            </div>
            <div style={{
                'textAlign': 'center'
            }}>
                <span >
                    Bora ver quem são os melhores Best Friends!
                </span>
            </div>
        </div>


    )
}

export default Room