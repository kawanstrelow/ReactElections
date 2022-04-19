export default function CandidateCard({
  id = 'id',
  candidateName = 'candidateName',
  teste1 = '../img/antman.png',
  candidateId = 'candidateId',
  votes = 'votes',
  cityPopulation = 'Presence vote',
}) {
  let partVotes = ((votes / cityPopulation) * 100).toFixed(2);
  let imgAdress = candidateName
    .filter(e => e.id === candidateId)
    .map(e => e.username)
    .toString();
  return (
    <div className="shadow-lg w-80 h-48 p-4 m-4">
      <div className="flex flex-row justify-between">
        <h2>
          <img src={`../img/${imgAdress}.png`} width="80" alt="" />
        </h2>
        <div>
          <h2 className="text-center bg-green-200 text-xl">{partVotes}%</h2>
          <h2>{votes} votos</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2>
          <strong>
            {candidateName.filter(e => e.id === candidateId).map(e => e.name)}
          </strong>
        </h2>
        <h2>Eleito ou Não</h2>
      </div>
    </div>
  );
}
