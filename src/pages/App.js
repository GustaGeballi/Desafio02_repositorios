import gitLogo from '../assets/github.png'; 
import { useState } from 'react';
import { Container } from './styles'
import Input  from '../components/Input';
import Button  from '../components/Button';
import { api } from "../services/api"
import ItemRepo from '../components/ItemRepo';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  //---------------------------------------------------------
  
  const handleSearchRepo = async () => {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }
      alert('Repositório não encontrado');
  }

  //---------------------------------------------------------


  const handleRemoveRepo = (id) => {
    setRepos(prevRepos => prevRepos.filter(repo => repo.id !== id));
  }

  //---------------------------------------------------------


  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='GitHub logo' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
