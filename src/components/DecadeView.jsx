import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { api } from '../api/api'
import { Card } from '../components/Card'
import { Loader } from '../components/Loader'
import { useLoader } from '../hooks/useLoader'

const StyledDecadeView = styled.div`
  padding: 1rem;

  h1 {
    margin-bottom: 2rem;
  }

  .movies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
`
