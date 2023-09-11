import React from 'react';
import styles from './Vaga.module.css'
import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <li className={styles.vaga}>
    <h3 className={styles.vagaTitulo}>{props.titulo}</h3>
    <ul>
      <li><span className={styles.vagaEstilo}>Localizacao:</span> {props.localizacao}</li>
      <li ><span className={styles.vagaEstilo}>Senioridade:</span>{props.nivel}</li>

      <li ><span className={styles.vagaEstilo}>Tipo de contratacao:</span> {props.modalidade}</li>
      <li className={styles.vagaEstilo}>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li><span className={styles.vagaEstilo}>Requisitos:</span> {props.requisitos.join(', ')}</li>
    </ul>
    <AEstilo>

      <div>
      <Link><a className={styles.vagaLink} href="#">
      Ver detalhes e candidatar-se
    </a></Link></div>
    </AEstilo>
  </li>
)

const AEstilo = styled.div`
  background-color: rgba(255, 255, 255, 0.946);
  opacity: 0.8;
  margin-top: 20px;
`;

const Link = styled.a`
  scroll-behavior: smooth;
`

export default Vaga
