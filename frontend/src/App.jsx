import React, { useState } from 'react';
import './estilos.css';

export default function App() {
  // quem e como ta o usuário
  const [user, setUser] = useState({
    name: 'Carlos Silva',
    xp: 450,
    level: 3,
    badges: [
      { id: 1, title: 'Guardião da Senha', icon: '🛡️', description: 'Criou uma senha forte e ativou 2FA.' },
      { id: 2, title: 'Caçador de Phishing', icon: '🎣', description: 'Identificou e reportou um e-mail suspeito.' }
    ]
  });

  // como ta os treinamentos
  const [trainings, setTrainings] = useState([
    { id: 1, title: 'Conscientização sobre Phishing', xpReward: 100, status: 'Disponível', duration: '10 min' },
    { id: 2, title: 'Boas Práticas de Senhas e 2FA', xpReward: 150, status: 'Concluído', duration: '15 min' },
    { id: 3, title: 'Engenharia Social no Trabalho', xpReward: 200, status: 'Disponível', duration: '20 min' },
    { id: 4, title: 'Segurança em Redes Wi-Fi Públicas', xpReward: 120, status: 'Bloqueado', duration: '12 min' }
  ]);

  // como ta o ranking
  const [ranking, setRanking] = useState([
    { rank: 1, name: 'Ana Souza', xp: 850, level: 5 },
    { rank: 2, name: 'Bruno Lima', xp: 620, level: 4 },
    { rank: 3, name: 'Carlos Silva (Você)', xp: 450, level: 3 },
    { rank: 4, name: 'Mariana Costa', xp: 310, level: 2 },
    { rank: 5, name: 'Pedro Alves', xp: 150, level: 1 }
  ]);

  // calculo p barra de xp
  const xpPerLevel = 500;
  const currentLevelXP = user.xp % xpPerLevel;
  const progressPercentage = Math.min((currentLevelXP / xpPerLevel) * 100, 100);
  const xpNeeded = xpPerLevel - currentLevelXP;

  // concluir treino, somar xp e atualizar nivel
  const completeTraining = (id, reward) => {
    setTrainings(trainings.map(t => t.id === id ? { ...t, status: 'Concluído' } : t));
    
    const newXP = user.xp + reward;
    
    // sobe nivel
    const currentLevelXP = user.xp % xpPerLevel;
    const gainedLevel = Math.floor((currentLevelXP + reward) / xpPerLevel);
    const newLevel = user.level + gainedLevel;

    setUser(prev => ({
      ...prev,
      xp: newXP,
      level: newLevel
    }));

    // atualiza os pts no ranking
    setRanking(prevRanking =>
      prevRanking
        .map(player => player.name.includes('Você') ? { ...player, xp: newXP, level: newLevel } : player)
        .sort((a, b) => b.xp - a.xp)
        .map((player, index) => ({ ...player, rank: index + 1 }))
    );
  };


  return (
    <div style={{ padding: '30px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#5c94fc', color: '#fff', minHeight: '100vh' }}>
      
      {/* Header */}
      <header style={{ marginBottom: '30px', backgroundColor: '#d74f4d', padding: '20px', borderRadius: '12px', border: '4px solid #000', boxShadow: '4px 4px 0px #000' }}>
        <h1 style={{ margin: 0, color: '#f9e66c', textShadow: '2px 2px 0px #000', fontSize: '32px' }}> Painel Gamificado de Segurança</h1>
        <p style={{ color: '#fff', margin: '5px 0 0 0', fontWeight: 'bold' }}>Bem-vindo de volta, {user.name}!</p>
      </header>

      {/* status e barra de xp */}
      <div style={{ background: '#f9e66c', color: '#000', padding: '20px', borderRadius: '12px', marginBottom: '30px', border: '4px solid #000', boxShadow: '4px 4px 0px #000' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <div>
            <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold', display: 'block' }}>Nível Atual</span>
            <strong style={{ fontSize: '32px', color: '#d74f4d', textShadow: '1px 1px 0px #fff' }}> Nível {user.level}</strong>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold', display: 'block' }}>XP Total</span>
            <strong style={{ fontSize: '32px', color: '#0832b3' }}> {user.xp} XP</strong>
          </div>
        </div>

        {/* info progresso*/}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>
          <span>Progresso do Nível {user.level}</span>
          <span>Faltam <strong>{xpNeeded} XP</strong> para o Nível {user.level + 1}</span>
        </div>

        {/* fundo barra progresso */}
        <div style={{ width: '100%', height: '18px', backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', border: '3px solid #000' }}>
          {/* animaçao */}
          <div 
            style={{ 
              width: `${progressPercentage}%`, 
              height: '100%', 
              backgroundColor: '#0db012', 
              borderRadius: '6px',
              transition: 'width 0.4s ease-in-out'
            }} 
          />
        </div>
      </div>

      {/* treinamentos e rankings grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px', marginBottom: '30px' }}>
        
        {/* secção de treinamentos */}
        <section style={{ background: '#fff', color: '#000', padding: '20px', borderRadius: '12px', border: '4px solid #000', boxShadow: '4px 4px 0px #000' }}>
          <h2 style={{ marginTop: 0, color: '#d74f4d', borderBottom: '3px solid #000', paddingBottom: '10px', fontSize: '24px' }}>
             Treinamentos Disponíveis
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
            {trainings.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '2px solid #000' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: '#000', fontSize: '16px', fontWeight: 'bold' }}>{item.title}</h4>
                  <span style={{ fontSize: '13px', color: '#555', marginRight: '15px' }}>⏱️ {item.duration}</span>
                  <span style={{ fontSize: '13px', color: '#d74f4d', fontWeight: 'bold' }}>+{item.xpReward} XP</span>
                </div>
                <div>
                  {item.status === 'Concluído' && (
                    <span style={{ padding: '6px 14px', background: '#0db012', color: '#fff', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', border: '2px solid #000' }}>✓ Concluído</span>
                  )}
                  {item.status === 'Disponível' && (
                    <button 
                      onClick={() => completeTraining(item.id, item.xpReward)}
                      style={{ padding: '8px 18px', background: '#f9e66c', color: '#000', border: '2px solid #000', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '2px 2px 0px #000' }}
                    >
                      START
                    </button>
                  )}
                  {item.status === 'Bloqueado' && (
                    <span style={{ padding: '6px 14px', background: '#ccc', color: '#666', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', border: '2px solid #000' }}>🔒 Bloqueado</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* secção de ranking */}
        <section style={{ background: '#fff', color: '#000', padding: '20px', borderRadius: '12px', border: '4px solid #000', boxShadow: '4px 4px 0px #000' }}>
          <h2 style={{ marginTop: 0, color: '#1e44b7', borderBottom: '3px solid #000', paddingBottom: '10px', fontSize: '24px' }}>
            🏆 Ranking Geral
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '15px 0 0 0' }}>
            {ranking.map(player => (
              <li 
                key={player.rank} 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center', 
                  padding: '12px 10px', 
                  borderBottom: '2px dashed #ccc',
                  backgroundColor: player.name.includes('Você') ? '#f8d80055' : 'transparent',
                  borderRadius: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold', width: '25px', color: player.rank === 1 ? '#d74f4d' : player.rank === 2 ? '#002288' : '#000' }}>
                    #{player.rank}
                  </span>
                  <span style={{ color: '#000', fontWeight: player.name.includes('Você') ? 'bold' : 'normal' }}>
                    {player.name}
                  </span>
                </div>
                <span style={{ fontWeight: 'bold', color: '#d74f4d', fontSize: '14px' }}>{player.xp} XP</span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* secção de conquistas */}
      <section style={{ background: '#fff', color: '#000', padding: '20px', borderRadius: '12px', border: '4px solid #000', boxShadow: '4px 4px 0px #000' }}>
        <h2 style={{ marginTop: 0, color: '#0db012', borderBottom: '3px solid #000', paddingBottom: '10px', fontSize: '24px' }}>
          🌟 Minhas Conquistas
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '15px' }}>
          {user.badges.map(badge => (
            <div key={badge.id} style={{ display: 'flex', alignItems: 'center', background: '#edf26393', padding: '15px', borderRadius: '8px', border: '2px solid #000' }}>
              <span style={{ fontSize: '32px', marginRight: '15px' }}>{badge.icon}</span>
              <div>
                <strong style={{ color: '#000', display: 'block' }}>{badge.title}</strong>
                <span style={{ color: '#444', fontSize: '13px' }}>{badge.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}