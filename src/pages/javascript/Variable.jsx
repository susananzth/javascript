import React from 'react'
import Content from '@components/Content'
import Acordeon from '@components/Acordeon'
import AcordeonItem from '@components/AcordeonItem'
import Code from '@components/Code'

function VariableJS() {
  return (
    <Content 
        mainTitle="Javascript"
        articleTitle="Variables"
        keywords="Javascript, Programación básica, Principios de programación"
        date="12/06/2024">
        <Acordeon>
            <AcordeonItem title="var">
                <p>Declaración de la variable</p>
                <Code>{`var nameVar `}</Code>
                <p>Asignación de la variable</p>
                <Code>{`nameVar = "soy var"`}</Code>
                <p>Redeclaración de la variable</p>
                <Code>{`var nameVar = "var soy" `}</Code>
                <p>Reasignación de la variable</p>
<Code>{`nameVar = "otro var"
console.log(nameVar) // otro var'`}</Code>
            </AcordeonItem>

            <AcordeonItem title="let">
                <p>Declaración de la variable</p>
                <Code>{`let nameLet`}</Code>
                <p>Asignación de la variable</p>
                <Code>{`nameLet = "soy let"`}</Code>
                <p>Redeclaración de la variable</p>
<Code>{`let nameLet = "let soy"
// Mostrará un error:
// SyntaxError: Identifier 'nameLet' has already been declared.`}</Code>
                <p>Reasignación de la variable</p>
<Code>{`nameLet = "otro let"
console.log(nameLet) // otro let'`}</Code>
            </AcordeonItem>

            <AcordeonItem title="const" style="rounded-b-xl">
                <p>Declaración y asignación de la variable</p>
                <Code>{`const nameConst = "soy const"`}</Code>
                <p>Redeclaración de la variable</p>
<Code>{`const nameConst = "const soy"
// Mostrará un error:
// SyntaxError: Identifier 'nameConst' has already been declared.`}</Code>
                <p>Reasignación de la variable</p>
<Code>{`nameConst = "otro const"
//TypeError: Assignment to constant variable.`}</Code>
            </AcordeonItem>
        </Acordeon>
    </Content>
  )
}

export default VariableJS