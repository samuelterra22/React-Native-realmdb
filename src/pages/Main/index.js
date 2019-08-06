import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'

import Repository from '~/components/Repository'

import { Container, Form, Input, Submit, Title, List } from './styles'

export default function Main () {
  return (
    <Container>
      <Title>Repositórios</Title>

      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={ false }
          placeholder="Procurar repositório..."
        />
        <Submit onPress={ () => {} }>
          <Icon name="add" size={ 22 } color="#FFF"/>
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={ [
          {
            id: 1,
            name: 'unform',
            description: 'Description here',
            stars: 1234,
            forks: 123
          }
        ] }
        keyExtractor={ item => String(item.id) }
        renderItem={ ({item}) => (
          <Repository data={ item }/>
        ) }
      />

    </Container>
  )
}
