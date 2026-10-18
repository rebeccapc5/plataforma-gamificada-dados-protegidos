import React from 'react';

export function RankingTable({ ranking }) {
  return (
    <div className="card">
      <h3> Ranking da Empresa</h3>
      <ul className="ranking-list">
        {ranking.map((item) => (
          <li
            key={item.rank}
            className={`ranking-item ${item.isUser ? 'highlight' : ''}`}
          >
            <span><strong>#{item.rank}</strong> {item.name}</span>
            <span><strong>{item.xp} XP</strong></span>
          </li>
        ))}
      </ul>
    </div>
  );
}