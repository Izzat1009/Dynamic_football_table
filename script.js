document.getElementById('addPlayer').addEventListener('click', function () {
    const players = [
        { id: 1, name: 'Lionel Messi', position: 'Forward', goals: 700 },
        { id: 2, name: 'Cristiano Ronaldo', position: 'Forward', goals: 800 },
        { id: 3, name: 'Kylian Mbappé', position: 'Forward', goals: 250 },
        { id: 4, name: 'Neymar Jr.', position: 'Midfielder', goals: 400 },
        { id: 5, name: 'Luka Modric', position: 'Midfielder', goals: 150 },
        { id: 6, name: 'Virgil van Dijk', position: 'Defender', goals: 50 },
        { id: 7, name: 'Manuel Neuer', position: 'Goalkeeper', goals: 1 }
    ];

    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    const table = document.getElementById('playerTable');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${new Date().toLocaleString()}</td>
        <td>${randomPlayer.id}</td>
        <td>${randomPlayer.name}</td>
        <td>${randomPlayer.position}</td>
        <td>${randomPlayer.goals}</td>
    `;

    table.appendChild(newRow);
});