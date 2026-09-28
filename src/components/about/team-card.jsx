export function TeamCard({ member }) {
  return (
    <div className="team-card">
      <div className="team-info">
        <h4>{member.name}</h4>
        {member.role && <p className="team-role">{member.role}</p>}
        <p className="team-nim">{member.nim}</p>
      </div>
    </div>
  );
}
