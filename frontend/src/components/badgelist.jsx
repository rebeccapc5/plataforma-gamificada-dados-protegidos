import React from 'react';

export function BadgeList({ badges }) {
  return (
    <div className="card">
      <h3> Minhas Conquistas (Badges)</h3>
      <div className="badge-grid">
        {badges.map((badge) => (
          <div key={badge.id} className="badge-item">
            <span className="badge-icon">{badge.icon}</span>
            <div>
              <strong>{badge.title}</strong>
              <p>{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}