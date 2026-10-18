import React from 'react';

export function UserCard({ user, onAddXp }) {
  return (
    <div className="card">
      <h2>Olá, {user.name}</h2>
      <div className="stats-row">
        <span className="badge-level">Nível {user.level}</span>
        <span className="xp-score"> {user.xp} XP</span>
      </div>
      <button className="btn-primary" onClick={onAddXp}>
        Simular Ação Segura (+50 XP)
      </button>
    </div>
  );
}